import { useQuery } from '@tanstack/react-query';
import { gameNameSchema } from '../schema';

export default function useCheckGameNameExists(gameName) {
  /**
   * Check if the game name exists (each call after 2 seconds throttle)
   * @returns {Promise<boolean>} - True if the game name exists, false otherwise
   */
  const checkGameNameExists = async () => {
    if (!gameName) return false;

    // throttle function (each call after 2 seconds delay)
    const throttle = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

    // if not valid not need to check
    const isValid = gameNameSchema.safeParse(gameName);
    if (!isValid.success) {
      return false;
    }

    // Simulate API call delay
    await throttle(2000);

    // Fake check - return true if game name is "GG10"
    const existingNames = ['GG10'];
    return existingNames.includes(gameName);
  };

  return useQuery({
    queryKey: ['check_game_name_exists', gameName],
    queryFn: checkGameNameExists,
    enabled: !!gameName && gameName.trim().length > 0,
  });
}
