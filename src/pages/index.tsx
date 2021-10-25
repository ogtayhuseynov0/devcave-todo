import { Box } from "@chakra-ui/react";

import AddTodo from "../components/todo/AddTodo";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <AddTodo />
    </Box>
  );
};

export default Home;
