/* eslint-disable no-console */

import { client } from 'lib/gql/client';
import { useQuery } from 'react-query';

import { useSelectedCircle } from '../../recoilState';

export function useCurrentCircleIntegrations() {
  const { circleId } = useSelectedCircle();

  return useQuery(['circle-integrations', circleId], async () => {
    console.log('Start.GetCircleIntegrations');
    const res = await client.query(
      {
        circles_by_pk: [
          { id: circleId },
          {
            id: true,
            integrations: [
              {},
              { id: true, type: true, name: true, data: [{ path: '$' }, true] },
            ],
          },
        ],
      },
      {
        operationName: 'circle_integrations',
      }
    );

    console.log('DONE.GetCircleIntegrations');
    return res.circles_by_pk?.integrations;
  });
}
