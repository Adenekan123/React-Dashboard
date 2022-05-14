import React from "react";

//components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { Container } from "../components/Container";

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <Aside />
        <Main>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white shadow p-8">
              <h3 className="font-semibold text-tertiary uppercase mb-10">
                personal information
              </h3>
              <div className="profile-photo mb-5">
                <div className="w-32 h-32 border"></div>
              </div>
              <div className="info grid gap-8 grid-cols-12 items-center text-sm text-tertiary">
                <div className="col-span-3  h-full">
                  <label
                    htmlFor="name"
                    className="block capitalize font-semibold">
                    full name:
                  </label>
                </div>
                <div className="col-span-9">
                  <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    placeholder=""
                  />
                </div>
                <div className="col-span-3  h-full">
                  <label
                    htmlFor="title"
                    className="block capitalize font-semibold">
                    title:
                  </label>
                </div>
                <div className="col-span-9">
                  <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    placeholder=""
                  />
                </div>
                <div className="col-span-3  h-full">
                  <label
                    htmlFor="email"
                    className="block capitalize font-semibold">
                    email:
                  </label>
                </div>
                <div className="col-span-9">
                  <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="text-center mt-10">
                <button className="bg-primary text-secondary font-semibold capitalize px-6 py-2 rounded">
                  Save
                </button>
              </div>
            </div>
            <div className="bg-white shadow p-8 self-start">
              <h3 className="font-semibold text-tertiary uppercase mb-10">
                change password
              </h3>
              <div className="info grid gap-8 grid-cols-12 items-center text-sm text-tertiary">
                <div className="col-span-3  h-full">
                  <label
                    htmlFor="name"
                    className="block capitalize font-semibold">
                    current password:
                  </label>
                </div>
                <div className="col-span-9">
                  <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    placeholder=""
                  />
                </div>
                <div className="col-span-3  h-full">
                  <label
                    htmlFor="title"
                    className="block capitalize font-semibold">
                    new password:
                  </label>
                </div>
                <div className="col-span-9">
                  <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    placeholder=""
                  />
                </div>
                <div className="col-span-3  h-full">
                  <label
                    htmlFor="email"
                    className="block capitalize font-semibold">
                    confirm password:
                  </label>
                </div>
                <div className="col-span-9">
                  <input
                    type="text"
                    className="w-full border rounded py-2 px-3"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="text-center mt-10">
                <button className="bg-primary text-secondary font-semibold capitalize px-6 py-2 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </Main>
      </Container>
    </>
  );
};

export default Profile;
