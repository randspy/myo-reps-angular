export interface RouteType {
  title: string;
  url: string;
}

export const sideBarRoutePaths: RouteType[] = [
  {
    title: 'Workouts',
    url: '/workouts',
  },
  {
    title: 'Exercises',
    url: '/exercises',
  },
  {
    title: 'Sessions',
    url: '/sessions',
  },
];
