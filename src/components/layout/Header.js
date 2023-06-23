import UserIcon from "assets/icons/UserIcon";
import { NavLink } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "atom/userAtom";
import { onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import Swal from "sweetalert2";
import { auth, db } from "../../firebase/firebase-config";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Header = () => {
  const setUserAtom = useSetAtom(userAtom);
  const [profileModal, setProfileModal] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        onSnapshot(docRef, (snapshot) => {
          snapshot.forEach((doc) => {
            setUserAtom({
              ...user,
              ...doc.data(),
            });
          });
        });
      } else {
        setUserAtom(null);
      }
    });
  }, [setUserAtom]);

  const userInfo = useAtomValue(userAtom);

  const menuLinks = [
    {
      url: "/",
      title: "Trang chủ",
    },
    {
      url: `${userInfo ? "/manage-tour" : "/signin"}`,
      title: "Chuyến đi của tôi",
    },
    {
      url: "/famous-site",
      title: "Địa điểm nổi bật",
    },
  ];

  // Đăng xuất
  const handleLogOut = () => {
    Swal.fire({
      title: "Do you want to log out?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        signOut(auth);
        setUserAtom(null);
        Swal.fire("Logout!", "Account log out successfully!", "success");
        navigate("/");
      }
    });
  };

  useEffect(() => {
    if (!userInfo?.uid) return;
    async function fetchData() {
      const colRef = doc(db, "users", userInfo.uid);
      const docData = await getDoc(colRef);
      reset(docData && docData.data());
      setValue("password", "");
      setValue("confirmPassword", "");
    }
    fetchData();
  }, [reset, setValue, userInfo?.uid]);

  const handleUpdateUser = async (values) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Mật khẩu xác nhận không chính xác!");
      return;
    }
    if (!values.password && !values.confirmPassword) {
      try {
        const colRef = doc(db, "users", userInfo?.uid);
        const docData = await getDoc(colRef);
        await updateDoc(colRef, {
          ...values,
          password: docData.data().password || "",
          confirmPassword: docData.data().confirmPassword || "",
        });
        toast.success("Cập nhật thông tin thành công!");
      } catch (error) {
        console.log(error);
        toast.error("Cập nhật thất bại");
      }
    } else {
      try {
        const colRef = doc(db, "users", userInfo?.uid);
        await updateDoc(colRef, {
          ...values,
        });
        if (values.password) {
          await updatePassword(auth.currentUser, values.password);
        }
        toast.success("Cập nhật thông tin thành công!");
      } catch (error) {
        console.log(error);
        toast.error("Cập nhật thất bại");
      }
    }
    setProfileModal(!profileModal);
  };

  return (
    <div className="bg-[#6557B9] w-full sticky top-0 z-[1111]">
      <div className="flex items-center justify-between text-white page-container px-9 py-[22px]">
        <NavLink to="/">
          <img srcSet="/logoNew.png 1x" alt="logo" />
        </NavLink>
        <div className="flex items-center justify-center gap-x-10">
          {menuLinks.map((item, index) => (
            <NavLink
              to={item.url}
              key={index}
              className="cursor-pointer hover:opacity-70 "
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="relative group">
          <div className="flex items-center justify-center gap-x-2">
            <UserIcon className="cursor-pointer hover:opacity-70"></UserIcon>
            {userInfo && (
              <p className="font-medium text-white">
                {`${userInfo.firstName} ${userInfo.lastName}`}
              </p>
            )}
          </div>
          <div
            className={`scale-0 absolute top-[50px] right-0 p-5 text-lg text-black bg-white rounded-lg shadow-sm flex flex-col gap-y-3 group-hover:scale-100 transition-all  ${
              userInfo ? "min-w-[205px]" : "min-w-[150px]"
            } z-10`}
          >
            {userInfo ? (
              <>
                <p
                  className="transition-all cursor-pointer hover:-translate-x-2"
                  onClick={() => setProfileModal(!profileModal)}
                >
                  Thông tin cá nhân
                </p>
                <p
                  className="font-semibold text-red-500 transition-all cursor-pointer hover:-translate-x-2"
                  onClick={handleLogOut}
                >
                  Đăng xuất
                </p>
              </>
            ) : (
              <>
                <a
                  href="/signin"
                  className="font-semibold text-[#6557B9] transition-all cursor-pointer hover:-translate-x-2"
                >
                  Đăng nhập
                </a>
                <a
                  href="/register"
                  className="font-semibold text-[#6557B9] transition-all cursor-pointer hover:-translate-x-2"
                >
                  Đăng ký
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      {profileModal && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={() => setProfileModal(!profileModal)}
        >
          <div
            className="absolute z-20 px-5 py-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-md left-1/2 top-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit(handleUpdateUser)}>
              <h2 className="mb-10 text-xl font-semibold text-center">
                THÔNG TIN CÁ NHÂN
              </h2>
              <div className="flex items-center justify-between mb-5 gap-x-3">
                <label htmlFor="firstName">First Name:</label>
                <Controller
                  control={control}
                  name="firstName"
                  id="firstName"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập firstName"
                      type="text"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between mb-5 gap-x-3">
                <label htmlFor="lastName">Last Name:</label>
                <Controller
                  control={control}
                  name="lastName"
                  id="lastName"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập lastName"
                      type="text"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between mb-5 gap-x-3">
                <label htmlFor="email">Email:</label>
                <Controller
                  control={control}
                  name="email"
                  id="email"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập email"
                      type="email"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between mb-5 gap-x-5">
                <label htmlFor="password">Mật khẩu</label>
                <Controller
                  control={control}
                  name="password"
                  id="password"
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Nhập mật khẩu mới"
                      type="password"
                      className="w-[380px]"
                    />
                  )}
                />
              </div>
              <div className="flex items-center justify-between mb-5 gap-x-5">
                <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                <Controller
                  control={control}
                  name="confirmPassword"
                  id="confirmPassword"
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      className="w-[380px]"
                      placeholder="Nhập lại mật khẩu mới"
                    />
                  )}
                />
              </div>
              <button
                type="submit"
                className="block px-4 py-3 mx-auto text-white transition-all rounded-md bg-purple-1 hover:opacity-70"
              >
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
