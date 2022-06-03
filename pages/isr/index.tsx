import { GetStaticProps } from "next";
import { Links } from "../../components/ISR/Links";
import { Time } from "../../components/ISR/Time";
import type { NextPage } from "next";
import { currentTime } from "../../helpers/time";
import { RevalidateButton } from "../../components/ISR/RevalidateButton";
import { REVALIDATION_TIME } from "../../constants/common";
import { TestFetchButton } from "../../components/ISR/TestFetchButton";

type PropTypes = {
  currentTime: string;
};

export const IsrTop: NextPage<PropTypes> = ({ currentTime }) => {
  return (
    <main>
      <Time time={currentTime} />
      <Links />
      <RevalidateButton />
      <TestFetchButton />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      currentTime: currentTime(),
    },
    revalidate: REVALIDATION_TIME,
  };
};

export default IsrTop;
