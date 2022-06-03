import { GetStaticPaths, GetStaticProps } from "next";
import { Links } from "../../../components/ISR/Links";
import { Time } from "../../../components/ISR/Time";
import type { NextPage } from "next";
import { currentTime } from "../../../helpers/time";
import { REVALIDATION_TIME } from "../../../constants/common";
import { RevalidateButton } from "../../../components/ISR/RevalidateButton";

type PropTypes = {
  currentTime: string;
};

export const WildCard: NextPage<PropTypes> = ({ currentTime }) => {
  return (
    <main>
      <Time time={currentTime} />
      <Links />
      <RevalidateButton />
      <p>Dynamic Routeは、unstable_revalidateで消せない。。。</p>
    </main>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      currentTime: currentTime(),
    },
    revalidate: REVALIDATION_TIME,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default WildCard;
