import React, { FunctionComponent } from "react";
import { useSmartNavigation } from "../../navigation";
import { WebpageImageButton } from "./common";
import { useStyle } from "../../styles";
import { Image, View } from "react-native";

export type Item = {
  key: string;
  component: FunctionComponent;
};

const OsmosisImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Osmosis"
      source={require("../../assets/image/webpage/osmosis.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Osmosis", {});
      }}
    />
  );
};

export const OsmosisItem: Item = {
  key: "osmosis",
  component: OsmosisImage,
};

const StargazeImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Stargaze"
      source={require("../../assets/image/webpage/stargaze.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Stargaze", {});
      }}
    />
  );
};

export const StargazeItem: Item = {
  key: "stargaze",
  component: StargazeImage,
};

const WYNDDaoImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="WYND Dao"
      source={require("../../assets/image/webpage/wynddao.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.WYNDDao", {});
      }}
    />
  );
};

export const WYNDDaoItem: Item = {
  key: "wynddao",
  component: WYNDDaoImage,
};

const DaoDaoImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();
  const style = useStyle();

  return (
    <WebpageImageButton
      name="DAO DAO"
      source={require("../../assets/image/webpage/daodao.png")}
      overlayStyle={style.flatten(["opacity-60"])}
      onPress={() => {
        smartNavigation.pushSmart("Web.DaoDao", {});
      }}
    />
  );
};

export const DaoDaoItem: Item = {
  key: "daodao",
  component: DaoDaoImage,
};

const InjectiveImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Injective"
      source={require("../../assets/image/webpage/injective.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Injective", {});
      }}
    />
  );
};

export const InjectiveItem: Item = {
  key: "injective",
  component: InjectiveImage,
};

const MarsImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Mars Hub"
      source={require("../../assets/image/webpage/mars.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Mars", {});
      }}
    />
  );
};

export const MarsItem: Item = {
  key: "mars",
  component: MarsImage,
};

const UmeeImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Umee"
      source={require("../../assets/image/webpage/umee.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Umee", {});
      }}
    />
  );
};

export const UmeeItem: Item = {
  key: "umee",
  component: UmeeImage,
};

const StrideImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();
  const style = useStyle();

  return (
    <WebpageImageButton
      name="Stride"
      source={require("../../assets/image/webpage/stride.png")}
      overlayStyle={style.flatten(["opacity-60"])}
      onPress={() => {
        smartNavigation.pushSmart("Web.Stride", {});
      }}
    />
  );
};

export const StrideItem: Item = {
  key: "stride",
  component: StrideImage,
};

const RegenImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Regen"
      source={require("../../assets/image/webpage/regen.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Regen", {});
      }}
    />
  );
};

export const RegenItem: Item = {
  key: "regen",
  component: RegenImage,
};

const PStakeImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="pSTAKE"
      source={require("../../assets/image/webpage/pstake.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.PStake", {});
      }}
    />
  );
};

export const PStakeItem: Item = {
  key: "pstake",
  component: PStakeImage,
};

const StreamSwapImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="StreamSwap"
      source={require("../../assets/image/webpage/streamswap.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.StreamSwap", {});
      }}
    />
  );
};

export const StreamSwapItem: Item = {
  key: "streamswap",
  component: StreamSwapImage,
};

const IBCXImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="IBCX"
      source={require("../../assets/image/webpage/ibcx.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.IBCX", {});
      }}
    />
  );
};

export const IBCXItem: Item = {
  key: "ibcx",
  component: IBCXImage,
};

const IONDaoImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();
  const style = useStyle();

  return (
    <WebpageImageButton
      name="ION DAO"
      source={require("../../assets/image/webpage/iondao.png")}
      overlayStyle={style.flatten(["opacity-50"])}
      onPress={() => {
        smartNavigation.pushSmart("Web.IONDao", {});
      }}
    />
  );
};

export const IONDaoItem: Item = {
  key: "ION DAO",
  component: IONDaoImage,
};

const CalcFiImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Calc Finance"
      source={require("../../assets/image/webpage/calc.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Calc", {});
      }}
      imageAlignCenter={true}
    />
  );
};

export const CalcFiItem: Item = {
  key: "CalcFi",
  component: CalcFiImage,
};

const DexterImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Dexter"
      source={require("../../assets/image/webpage/dexter.png")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Dexter", {});
      }}
    />
  );
};

export const DexterItem: Item = {
  key: "Dexter",
  component: DexterImage,
};

const LevanaImage: FunctionComponent = () => {
  const smartNavigation = useSmartNavigation();

  return (
    <WebpageImageButton
      name="Levana Perps"
      source={require("../../assets/image/webpage/levana.jpeg")}
      onPress={() => {
        smartNavigation.pushSmart("Web.Levana", {});
      }}
    />
  );
};

export const LevanaItem: Item = {
  key: "Levana",
  component: LevanaImage,
};
