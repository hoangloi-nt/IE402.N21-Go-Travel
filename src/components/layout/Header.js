import UserIcon from "assets/icons/UserIcon";
import { NavLink } from "react-router-dom";
import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "atom/userAtom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { auth, db } from "../../firebase/firebase-config";
import { useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const setUserAtom = useSetAtom(userAtom);
  const navigate = useNavigate();

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
                <p className="transition-all cursor-pointer hover:-translate-x-2">
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
    </div>
  );
};

export default Header;
