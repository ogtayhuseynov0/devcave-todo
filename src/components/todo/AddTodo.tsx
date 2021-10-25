import { CheckCircleIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Center,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  FormControl,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const AddTodo = () => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    if (todo !== "") {
      setTodos((prevState) => [
        ...prevState,
        {
          isDone: false,
          todo,
          id: todos.length,
        },
      ]);
      setTodo("");
    }
  };

  const handleKeywordKeyPress = (
    e: React.KeyboardEvent<typeof FormControl>
  ) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const todoClick = (idx: any, td: any) => {
    const tds = todos.map((a) => {
      // @ts-ignore
      if (a.id === td.id) {
        // @ts-ignore
        a.isDone = !a.isDone;
      }
      return a;
    });
    setTodos(tds);
  };
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.700", "gray.100");

  // @ts-ignore
  return (
    <div>
      <Center>
        <InputGroup size="md">
          <Input
            placeholder="Write Task..."
            variant="filled"
            value={todo}
            // @ts-ignore
            onKeyDown={handleKeywordKeyPress}
            onChange={(e) => setTodo(e.target.value)}
          />
          <InputRightElement width="6rem">
            <Button
              rightIcon={<CheckCircleIcon />}
              h="1.75rem"
              onClick={() => addTodo()}
              size="sm"
              colorScheme="teal"
              variant="outline"
            >
              Add
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>

      <Center mt={10}>
        <List spacing={2} w="100%">
          {todos.map((a, idx) => (
            // @ts-ignore
            <ListItem
              cursor="pointer"
              _hover={{
                background: bg,
                color,
              }}
              borderWidth="1px"
              borderRadius="lg"
              p="16px"
              key={a.id}
              onClick={() => todoClick(idx, a)}
            >
              <ListIcon
                as={a.isDone ? CheckCircleIcon : MinusIcon}
                color={a.isDone ? "green.500" : "red.500"}
              />
              {a.todo}
            </ListItem>
          ))}
        </List>
      </Center>
    </div>
  );
};

export default AddTodo;
