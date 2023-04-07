import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";

import { fetchCareers, deleteCareer } from "../features/careers/careers";

const Careers = () => {
  const dispatch = useDispatch();
  const { careers, isLoading } = useSelector((store) => store.careers);

  console.log(careers);

  const onDelete = function (careerid) {
    dispatch(deleteCareer(careerid));
  };

  const goOut = (url) => {
    window.open(url);
  };
  useEffect(() => {
    dispatch(fetchCareers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <div className="md:grid grid-cols-12 gap-3 justify-center ">
            {isLoading ? <h1>Loading...</h1> : ""}

            {careers ? (
              <table className=" col-span-8 w-full  border border-collapse mx-auto bg-white">
                <tbody>
                  {careers.map((career, index) => (
                    <tr key={career._id}>
                      <th className="border py-2">{index}</th>
                      <td className="border py-2">
                        <button type="button" onClick={()=> goOut(`${career.cv}`)}
                          >
                          View
                        </button>
                      </td>
                      <td>
                        <button onClick={() => onDelete(career._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
          {!careers.length ? (
            <h1 className="border w-full p-1 bg-green-100 text-center text-xl">
              No Cv(s) Found
            </h1>
          ) : (
            ""
          )}
        </Main>
      </Container>
    </>
  );
};

export default Careers;
