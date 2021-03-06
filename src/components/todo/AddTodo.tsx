import { CheckCircleIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Center,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  FormControl,
  Tooltip,
  Text,
  List,
  Flex,
  Spacer,
  IconButton,
  ListItem,
  ListIcon,
  Editable,
  EditableInput,
  EditablePreview,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Box from "../motion/Box";

const AddTodo = () => {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const [hideDones, setHideDones] = useState(false);
  const [isServer, setIsServer] = useState(typeof window === "undefined");
  useEffect(() => {
    setIsServer(false);
    setTodos(JSON.parse(localStorage?.getItem("todos") as string) || []);
    setHideDones(String(localStorage?.getItem("hideDones")) === "true");
  }, []);
  // @ts-ignore
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("hideDones", String(hideDones || false));
  }, [todos, hideDones]);
  const addTodo = () => {
    if (todo.trim() !== "" && todo.trim().length < 500) {
      setTodos((prevState) => [
        {
          isDone: false,
          todo,
          id: todos.length,
        },
        ...prevState,
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
  const todoClick = (e: any, idx: any, td: any) => {
    e.stopPropagation();
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
  const deleteClick = (e: any, idx: any, td: any) => {
    e.stopPropagation();
    const tds = todos.filter((a) => a.id !== td.id);
    setTodos(tds);
  };
  const hideDonesF = () => {
    setHideDones(!hideDones);
  };
  const deleteAll = () => {
    setTodos([]);
  };
  const textChanged = (text: string, id: number) => {
    const tds = todos.map((a) => {
      // @ts-ignore
      if (a.id === id) {
        // @ts-ignore
        a.todo = text;
      }
      return a;
    });
    setTodos(tds);
  };
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.700", "gray.100");
  // @ts-ignore
  return (
    <>
      {isServer ? (
        <> server </>
      ) : (
        <div>
          <Center>
            <InputGroup>
              <Input
                placeholder="Write Task..."
                variant="filled"
                value={todo}
                pr="10rem"
                // @ts-ignore
                onKeyDown={handleKeywordKeyPress}
                onChange={(e) => setTodo(e.target.value)}
              />
              <InputRightElement width="10rem">
                <Box mr={2} color={todo.length >= 500 ? "red" : color}>
                  {`${todo.trim().length}/500`}
                </Box>
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
          <Flex flexDir="row-reverse" mt={5}>
            <Button
              rightIcon={<MinusIcon />}
              h="1.75rem"
              onClick={() => deleteAll()}
              size="sm"
              colorScheme="red"
              variant="outline"
            >
              Delete All
            </Button>
            <Button
              rightIcon={<CheckCircleIcon />}
              h="1.75rem"
              mr={2}
              onClick={() => hideDonesF()}
              size="sm"
              colorScheme={hideDones === true ? "green" : "gray"}
              variant="outline"
            >
              {hideDones === true ? "Show" : "Hide"} Finihsed
            </Button>
          </Flex>
          <Center mt={5}>
            <List spacing={2} w="100%">
              {todos
                .sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1))
                .filter((a) => (hideDones === true ? a.isDone === false : true))
                .map((a, idx) => (
                  // @ts-ignore
                  <ListItem
                    cursor="pointer"
                    _hover={{
                      background: bg,
                      color,
                    }}
                    onClick={(e) => todoClick(e, idx, a)}
                    borderWidth="1px"
                    borderRadius="lg"
                    p="16px"
                    key={a.id}
                  >
                    <Flex direction="column">
                      <Flex alignItems="center">
                        <ListIcon
                          as={CheckCircleIcon}
                          color={a.isDone ? "green.500" : "gray.500"}
                        />
                        <Spacer />
                        <Tooltip
                          label="Delete"
                          placement="bottom"
                          bg="red"
                          color="white"
                        >
                          <IconButton
                            aria-label="Delete "
                            size="xs"
                            mr={2}
                            onClick={(e) => deleteClick(e, idx, a)}
                            variant="outline"
                            colorScheme="red"
                            icon={<MinusIcon />}
                          />
                        </Tooltip>
                      </Flex>
                      <Text as={a.isDone ? "s" : "samp"}>
                        <Editable
                          onClick={(e) => e.stopPropagation()}
                          defaultValue={a.todo}
                          onSubmit={(nextValue: string) =>
                            textChanged(nextValue, a.id)
                          }
                        >
                          <EditablePreview as={a.isDone ? "s" : "samp"} />
                          <EditableInput />
                        </Editable>
                      </Text>
                    </Flex>
                  </ListItem>
                ))}
            </List>
          </Center>
        </div>
      )}
    </>
  );
};

export default AddTodo;
