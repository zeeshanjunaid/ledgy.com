declare type GreenhouseJobProps = Id & {
  title: string;
  content: string;
  greenhouseId: string;
  location: { name: string };
};

declare type GreenhouseDepartmentProps = Id & {
  name: string;
  childrenGreenhouseJobPost: GreenhouseJobProps[];
};
