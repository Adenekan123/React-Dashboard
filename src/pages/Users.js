import React from "react";
import { useSelector } from "react-redux";

//components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";
import Table from "../components/Table";

const Users = () => {
  const { users } = useSelector((store) => store.users);

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <Table
            headings={["s/n", "name", "title", "email", "action"]}
            data={users}
          />
        </Main>
      </Container>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   users: state.data,
//   isLoading: state.isLoading,
// });

// const mapDispatchToProps = (dispatch) => ({
//   startLoadingUsers: () => dispatch(loadUsersRequest()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Users);
export default Users;
