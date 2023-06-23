import React, { useEffect, useState } from "react";
import Layout from "components/layout/Layout";
import Tour from "components/tour";
import { Controller, useForm } from "react-hook-form";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../src/firebase/firebase-config";
import { useAtomValue } from "jotai";
import { userAtom } from "atom/userAtom";

const ManageTour = () => {
  const [openModal, setOpenModal] = useState(false);
  const [trips, setTrips] = useState([]);

  const userInfo = useAtomValue(userAtom);

  const { control, handleSubmit, setValue, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      image: "",
      begin_location: "",
      start_day: "",
      end_day: "",
      user: {},
    },
  });

  //   Chức năng POST trip lên Firebase
  const addTrip = async (values) => {
    console.log(values);
    try {
      const colRef = collection(db, "trips");
      await addDoc(colRef, {
        ...values,
        createdAt: serverTimestamp(),
      });
      console.log(trips, values);
      // const addTrip = trips.push(values);
      // setTrips([...addTrip]);
      toast.success("Tạo chuyến đi mới thành công!");
      reset({
        title: "",
        image: "",
        begin_location: "",
        start_day: "",
        end_day: "",
        user: {},
      });
    } catch (error) {
      console.log(error);
    }
    setOpenModal(!openModal);
  };

  useEffect(() => {
    if (!userInfo?.uid) return;
    async function fetchUserData() {
      const colRef = doc(db, "users", userInfo?.uid);
      const docData = await getDoc(colRef);
      setValue("user", {
        id: docData?.id,
        ...docData.data(),
      });
    }
    fetchUserData();
  }, [setValue, userInfo]);

  //   Gọi tất cả trips của user hiện tại ra và lưu và trips
  useEffect(() => {
    if (userInfo?.uid) {
      const colRef = collection(db, "trips");
      const queries = query(colRef, where("user.email", "==", userInfo?.email));
      onSnapshot(queries, (snapshot) => {
        const result = [];
        snapshot.forEach((item) =>
          result.push({
            id: item.id,
            ...item.data(),
          })
        );
        setTrips(result);
      });
    }
  }, [userInfo]);

  return (
    <Layout>
      <div className="bg-white max-w-[1440px] px-[113px] mx-auto mb-[227px]">
        <h1 className="pt-10 mx-auto text-2xl font-bold text-center mb-[106px]">
          Quản lý thông tin chuyến đi
        </h1>
        <div className="flex items-center justify-between mb-[43px]">
          <div className="text-[20px] leading-[23px] text-[#6557B9]">
            DANH SÁCH CHUYẾN ĐI HIỆN TẠI CỦA BẠN
          </div>
          <button
            className="py-[16px] px-[16px] text-white bg-[#6557B9] rounded font-semibold text-[16px] hover:opacity-60"
            onClick={() => setOpenModal(!openModal)}
          >
            Thêm chuyến đi
          </button>
        </div>
        <div className="flex flex-col items-center gap-[50px]">
          {trips.length <= 0 && (
            <h3 className="text-xl">Bạn chưa có chuyến đi nào</h3>
          )}
          {trips.length > 0 &&
            trips.map((item) => (
              <Tour
                key={item?.id}
                id={item?.id}
                title={item?.title}
                imageUrl={item.image}
                beginLocation={item?.begin_location}
                startDay={item?.start_day}
                endDay={item?.end_day}
              ></Tour>
            ))}
        </div>
      </div>

      {openModal && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={() => setOpenModal(!openModal)}
        >
          <div
            className="absolute z-20 px-5 py-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-md left-1/2 top-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit(addTrip)}>
              <h2 className="mb-10 text-xl font-semibold text-center">
                THÊM CHUYẾN ĐI
              </h2>
              <div className="flex items-center justify-center mb-5">
                <Controller
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập tên chuyến đi"
                      type="text"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-center mb-5">
                <Controller
                  control={control}
                  name="begin_location"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập địa điểm khởi hành"
                      type="text"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-center mb-5">
                <Controller
                  control={control}
                  name="image"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập url hình ảnh"
                      type="text"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between mb-5 gap-x-5">
                <label htmlFor="start_day">Thời gian bắt đầu</label>
                <Controller
                  control={control}
                  name="start_day"
                  render={({ field }) => (
                    <input
                      {...field}
                      id="start_day"
                      type="date"
                      name="start_day"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between mb-8 gap-x-4">
                <label htmlFor="end_day">Thời gian kết thúc</label>
                <Controller
                  control={control}
                  name="end_day"
                  render={({ field }) => (
                    <input {...field} id="end_day" type="date" name="end_day" />
                  )}
                />
              </div>
              <button
                type="submit"
                className="block px-4 py-3 mx-auto text-white transition-all rounded-md bg-purple-1 hover:opacity-70"
              >
                Thêm
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ManageTour;
