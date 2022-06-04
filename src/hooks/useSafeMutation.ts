import { useRecoilState } from 'recoil';

import { rGlobalLoading } from 'recoilState/ui';
import { normalizeError, reportException } from 'utils/reporting';

import { useApeSnackbar } from './useApeSnackbar';

export const useSafeMutation = <T>(
  fn: () => T,
  { hideLoading, success }: { hideLoading?: boolean; success?: string } = {}
): (() => Promise<T | undefined>) => {
  const [globalLoading, setGlobalLoading] = useRecoilState(rGlobalLoading);

  const { apeError, apeInfo } = useApeSnackbar();

  // FIXME: how do i just not fetch globalLoading here
  if (globalLoading) {
    // stuff
  }

  return async (): Promise<T | undefined> => {
    try {
      !hideLoading && setGlobalLoading(v => v + 1);
      const result = await fn();
      // if success is provided, notify about it
      success && apeInfo(success);
      return result;
    } catch (e) {
      const err = normalizeError(e);
      apeError(err);
      reportException(err);
    } finally {
      !hideLoading && setGlobalLoading(v => v - 1);
    }
    return undefined;
  };
};
