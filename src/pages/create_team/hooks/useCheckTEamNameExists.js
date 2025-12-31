import { useQuery } from '@tanstack/react-query';
import { teamNameSchema } from '../schema';

export default function useCheckTeamNameExists(teamName) {
  /* Fake API check for team name existence
   * Response after 1 second
   * @param {string} teamName - The team name to check
   * @returns {Promise<boolean>} - True if the team name exists, false otherwise
   */
  const checkTeamNameExists = async () => {
    if (!teamName) return false;

    // if ot valid not need to check
    const isValid = teamNameSchema.safeParse(teamName);
    if (!isValid.success) {
      return false;
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Fake check - return true if team name is "test" or "existing"
    const existingNames = ['test', 'existing', 'team1'];
    return existingNames.includes(teamName.toLowerCase());
  };

  return useQuery({
    queryKey: ['check_team_name_exists', teamName],
    queryFn: checkTeamNameExists,
    enabled: !!teamName,
  });
}
