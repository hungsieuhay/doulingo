import { ReactNode } from "react";
import { Header } from "./_components/header";

type Props = {
  children: ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="container flex flex-grow flex-col px-0">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MarketingLayout;
