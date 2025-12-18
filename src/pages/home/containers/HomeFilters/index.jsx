import { Stack } from '@mui/material';
import FilterChip from './components/FilterChip';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import FiltersDrawer from './FiltersDrawer';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';
import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';
import { useTheme } from '@mui/material/styles';
import SearchAndDestroyIcon from '@/components/icons/chip/SearchAndDestroyIcon';
import { FormProvider, useForm } from 'react-hook-form';
import { motion, useMotionValue } from 'framer-motion';
import HardPointIcon from '@/components/icons/HardPointIcon';
import MyLobbiesRankIcon from '@/components/icons/MyLobbiesRankIcon';

// Complete filter map organized by game mode
const filterMap = {
  'battle-royal': {
    solo: 'سولو',
    double: 'دابل',
    trios: 'تریو',
    squad: 'اسکوادی',
    killie: 'کیلی',
    ranked: 'جایگاهی',
    tagie: 'تگی',
    autoRevive: 'اتو ریوایو',
    freeLobby: 'لابی های رایگان',
    rankOnlyLobby: 'لابی های با رنک مجاز من',
  },
  multiplayer: {
    searchAndDistro: 'سرچ اند دیستروی',
    hardpoint: 'هاردپوینت',
    freeForAll: 'فری فور آل',
    duo: 'دوئل',
    freeLobby: 'لابی های رایگان',
    rankOnlyLobby: 'لابی های با رنک مجاز من',
    myRankLobbies: 'لابی های رنک من',
  },
};

// Legacy map for backward compatibility (can be removed if not used elsewhere)
const selectedFIlterMap = {
  ...filterMap['battle-royal'],
  ...filterMap['multiplayer'],
};

const suggestedFilters = {
  'battle-royal': [
    { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
    { label: 'اتوریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
    { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
  ],
  multiplayer: [
    {
      label: 'سرچ اند دیستروی',
      icon: SearchAndDestroyIcon,
      key: 'searchAndDistro',
    },
    { label: 'هاردپوینت', icon: HardPointIcon, key: 'hardpoint' },
    { label: 'لابی های رنک من', icon: MyLobbiesRankIcon, key: 'myRankLobbies' },
  ],
};

export default function HomeFilters() {
  const containerRef = useRef(null);
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const startScrollRef = useRef(0);
  const startXRef = useRef(0);
  const x = useMotionValue(0);
  const isDraggingRef = useRef(false);

  const gameMode = useMemo(
    () => (searchParams.get('gameMode') ? searchParams.get('gameMode') : 'multiplayer'),
    [searchParams],
  );

  const defaultValueNames = useMemo(() => {
    return gameMode === 'multiplayer'
      ? Object.keys(MULTIPLAYER_DEFAULT_VALUES)
      : Object.keys(BATTLE_ROYAL_DEFAULT_VALUES);
  }, [gameMode]);

  // console.log('[HomeFilters] defaultValues', defaultValues);

  const defaultValues = useMemo(() => {
    const defaultValues = {};
    defaultValueNames.forEach((name) => {
      defaultValues[name] = searchParams.get(name) === 'true';
    });
    return defaultValues;
  }, [defaultValueNames, searchParams]);

  const methods = useForm({ defaultValues, mode: 'onChange' });

  const toggleFilter = useCallback(
    (filter) => {
      const newParams = new URLSearchParams(searchParams);
      const has = newParams.has(filter.key);

      if (has) {
        newParams.delete(filter.key);
      } else {
        newParams.set(filter.key, 'true');
      }

      setSearchParams(newParams, { replace: true });

      // Set to form values
      methods.setValue(filter.key, !has);
    },
    [searchParams, setSearchParams, methods],
  );

  const selectedFiltersExceptSuggested = useMemo(() => {
    const result = [];
    const suggestedKeys = suggestedFilters[gameMode]?.map((filter) => filter.key) || [];

    // Get all active filter keys from searchParams
    defaultValueNames.forEach((key) => {
      const isActive = searchParams.get(key) === 'true';
      const isNotSuggested = !suggestedKeys.includes(key);

      if (isActive && isNotSuggested) {
        result.push(key);
      }
    });

    return result;
  }, [searchParams, gameMode, defaultValueNames]);

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  // Reset transform to prevent visual movement during drag
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    let rafId;
    const resetTransform = () => {
      if (containerRef.current && isDraggingRef.current) {
        // Reset any transform applied by Framer Motion
        const transform = containerRef.current.style.transform;
        if (transform && transform !== 'translateX(0px) translateZ(0px)') {
          containerRef.current.style.transform = 'translateX(0px) translateZ(0px)';
        }
      }
      if (isDraggingRef.current) {
        rafId = requestAnimationFrame(resetTransform);
      }
    };

    // Only start the loop when dragging starts
    const checkDrag = () => {
      if (isDraggingRef.current) {
        rafId = requestAnimationFrame(resetTransform);
      }
    };

    // Check periodically if dragging started
    const intervalId = setInterval(checkDrag, 16);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      clearInterval(intervalId);
    };
  }, []);

  // Helper to get normalized scroll position
  const getScrollPosition = useCallback(() => {
    if (!containerRef.current) return 0;
    const el = containerRef.current;
    const isRtl = window.getComputedStyle(el).direction === 'rtl';
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);

    if (isRtl) {
      // In RTL, scrollLeft can be negative
      return el.scrollLeft <= 0 ? Math.abs(el.scrollLeft) : maxScroll - el.scrollLeft;
    }
    return el.scrollLeft || 0;
  }, []);

  // Helper to set scroll position
  const setScrollPosition = useCallback((position) => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const isRtl = window.getComputedStyle(el).direction === 'rtl';
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const boundedPos = Math.max(0, Math.min(maxScroll, position));

    if (isRtl) {
      el.scrollLeft = -boundedPos;
    } else {
      el.scrollLeft = boundedPos;
    }
  }, []);

  return (
    <>
      <Stack
        component={motion.div}
        direction="row"
        gap={1}
        drag="x"
        dragElastic={0.2}
        dragMomentum={false}
        dragPropagation={false}
        style={{ x }}
        onDragStart={(event, info) => {
          if (containerRef.current) {
            const el = containerRef.current;
            isDraggingRef.current = true;
            startScrollRef.current = getScrollPosition();
            startXRef.current = info.point.x;
            el.style.scrollBehavior = 'auto';
            // Reset transform to prevent visual movement
            x.set(0);
          }
        }}
        onDrag={(event, info) => {
          if (containerRef.current) {
            // Reset transform immediately to prevent visual movement
            x.set(0);

            const deltaX = info.point.x - startXRef.current;
            const isRtl =
              window.getComputedStyle(containerRef.current).direction === 'rtl';
            // Invert direction for RTL
            const scrollDelta = isRtl ? deltaX : -deltaX;
            const newScroll = startScrollRef.current + scrollDelta;
            setScrollPosition(newScroll);
          }
        }}
        onDragEnd={(event, info) => {
          if (containerRef.current) {
            isDraggingRef.current = false;
            // Ensure transform is reset
            x.set(0);
            containerRef.current.style.scrollBehavior = 'smooth';

            // Apply momentum scrolling based on velocity
            const velocity = info.velocity.x;
            if (Math.abs(velocity) > 100) {
              const currentScroll = getScrollPosition();
              const isRtl =
                window.getComputedStyle(containerRef.current).direction === 'rtl';
              // Convert velocity to scroll delta (invert for RTL)
              const velocityDelta = isRtl ? velocity * 0.3 : -velocity * 0.3;
              const targetScroll = currentScroll + velocityDelta;

              // Animate to target scroll position
              const startPos = currentScroll;
              const endPos = targetScroll;
              const duration = Math.min(0.5, Math.abs(velocityDelta) / 1000);

              let startTime = null;
              const animateScroll = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOut cubic
                const currentPos = startPos + (endPos - startPos) * easeProgress;
                setScrollPosition(currentPos);

                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                }
              };
              requestAnimationFrame(animateScroll);
            }
          }
        }}
        whileDrag={{ cursor: 'grabbing' }}
        ref={containerRef}
        sx={{
          direction: 'rtl',
          mb: 3,
          pb: 1,
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          cursor: 'grab',
          userSelect: 'none',
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
      >
        {/* Filters Drawer */}
        <FormProvider {...methods}>
          <FiltersDrawer>
            {gameMode === 'multiplayer' ? (
              <MultiplayerFilterForm />
            ) : (
              <BattleRoyalFilterForm />
            )}
          </FiltersDrawer>
        </FormProvider>

        {/* Also render selected filters except suggested filters */}
        {selectedFiltersExceptSuggested.map((key) => {
          const active = searchParams.get(key) === 'true';
          const label = filterMap[gameMode]?.[key] || selectedFIlterMap[key] || key;

          return (
            <FilterChip
              active={active}
              key={key}
              label={label}
              onClick={() => toggleFilter({ key })}
            />
          );
        })}

        {/* Filters Chips */}
        {suggestedFilters[gameMode]?.map((filter) => {
          const active = searchParams.get(filter.key) === 'true';
          const iconColor = active ? theme.palette.custom.blackOnPrimary : 'white';

          return (
            <FilterChip
              active={active}
              key={filter.label}
              icon={<filter.icon color={iconColor} />}
              label={filter.label}
              onClick={() => toggleFilter(filter)}
            />
          );
        })}
      </Stack>
    </>
  );
}
