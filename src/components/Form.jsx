import React, {useEffect} from "react";
import { useState } from "react";
import Input from "./Input";

export default function Form() {
    const [value, setValue] = useState({});
    const [error, setError] = useState({});
    const onSubmit = (event) => {
      event.preventDefault();
    const errorObject = {};
    console.log('value name', value.name);
      if (value.name?.trim() === '') {
        console.log("Hereee");
        errorObject.name = "Vui lòng nhập tên";
      }
      console.log(errorObject);
      setError(errorObject);
    };
  return (
    <>
      <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> 6.000.000 VND
                </div>
              </div>
              <form className="form" onSubmit={onSubmit}>
                <Input
                  defaultValue={""}
                  onChange={(event) => (value.name = event.target.value)}
                  label={"Họ và Tên"}
                  placeholder={"Nhập họ tên"}
                  required={true}
                  error={error}
                />
                <Input
                  defaultValue=''
                  onChange={(event) => (value.phone = event.target.value)}
                  label={"Số điện thoại"}
                  placeholder={"Số điện thoại"}
                  required={true}
                  error={error}
                />
                <Input
                  onChange={(event) => (value.email = event.target.value)}
                  label={"Email"}
                  placeholder={"Nhập Email"}
                  required={true}
                  error={error}
                />
                <Input
                  onChange={(event) => (value.url = event.target.value)}
                  label={"URL Facebook"}
                  placeholder={"https://facebook.com"}
                  required={true}
                  error={error}
                />
                <Input
                  onChange={(event) => (value.comment = event.target.value)}
                  label={"Ý kiến cá nhân"}
                  placeholder={"Mong muốn cá nhân và lịch bạn có thể học"}
                  required={false}
                  error={error}
                />
                <button type="submit" className="btn main rect">
                  đăng ký
                </button>
                </form>
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
    </>
  );
}
