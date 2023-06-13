import React, { useState } from 'react';
import styled from 'styled-components';
import TitleHeader from '../components/Header/TitleHeader';
import SignUpForm from '../components/SignUp/SignUpForm';
import ProfileForm from '../components/SignUp/ProfileForm';

const Main = styled.main`
  width: 100%;
  & > section {
    max-width: 322px;
    width: calc(100% - 34px * 2);
    margin: 0 auto;

    & > button {
      display: block;
      margin: 30px auto 0;
    }
  }
`;

export default function SignupPage() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const handleClickButton = () => {
    setShowSecondPage(true);
  };

  return (
    <>
      {!showSecondPage ? (
        <>
          <TitleHeader>이메일로 회원가입</TitleHeader>
          <Main>
            <section>
              <h2 className="a11y-hidden">이메일, 비밀번호 입력</h2>
              <SignUpForm handleClickButton={handleClickButton} />
            </section>
          </Main>
        </>
      ) : (
        <>
          <TitleHeader subText="나중에 언제든지 변경할 수 있습니다.">
            프로필 설정
          </TitleHeader>
          <Main>
            <section>
              <h2 className="a11y-hidden">
                사용자이름, 계정ID, 소개 작성 컨테이너
              </h2>
              <ProfileForm />
            </section>
          </Main>
        </>
      )}
    </>
  );
}
