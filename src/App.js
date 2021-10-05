import Sidebar from "./components/Sidebar";
import { Flex } from "@chakra-ui/layout";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import PostsArea from "./components/PostsArea";

function App() {
  return (
    <BrowserRouter>
      <Flex p="5" h="100vh" justify="center" flexGrow="0" flexBasis="0" align="center">
        <Sidebar />
        <Route path="/:prefix">
          <PostsArea />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
