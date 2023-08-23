import React, { FunctionComponent, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { HeaderLayout } from "../../layouts/header";
import { Box } from "../../components/box";
import { useStore } from "../../stores";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useIBCSwapConfig } from "../../hooks/ibc-swap";
import { SwapAssetInfo } from "./components/swap-asset-info";

export const IBCSwapPage: FunctionComponent = observer(() => {
  const { chainStore, queriesStore, accountStore, skipQueriesStore } =
    useStore();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialChainId = searchParams.get("chainId");
  const initialCoinMinimalDenom = searchParams.get("coinMinimalDenom");

  const chainId = initialChainId || chainStore.chainInfosInUI[0].chainId;
  const coinMinimalDenom =
    initialCoinMinimalDenom ||
    chainStore.getChain(chainId).currencies[0].coinMinimalDenom;

  useEffect(() => {
    if (!initialChainId || !initialCoinMinimalDenom) {
      navigate(
        `/send/select-asset?isIBCSwap=true&navigateReplace=true&navigateTo=${encodeURIComponent(
          "/ibc-swap?chainId={chainId}&coinMinimalDenom={coinMinimalDenom}"
        )}`
      );
    }
  }, [navigate, initialChainId, initialCoinMinimalDenom]);

  const currency = chainStore
    .getChain(chainId)
    .forceFindCurrency(coinMinimalDenom);

  const ibcSwapConfigs = useIBCSwapConfig(
    chainStore,
    queriesStore,
    skipQueriesStore,
    chainId,
    accountStore.getAccount(chainId).bech32Address,
    300000,
    "akashnet-2",
    chainStore.getChain("akashnet").forceFindCurrency("uakt")
  );

  ibcSwapConfigs.amountConfig.setCurrency(currency);

  console.log(
    ibcSwapConfigs.amountConfig.isFetching,
    ibcSwapConfigs.amountConfig.outAmount.toString(),
    ibcSwapConfigs.amountConfig.effectivePriceOutOverIn.toString()
  );

  return (
    <HeaderLayout title="IBC Swap">
      <Box paddingX="0.75rem" paddingBottom="1.5rem">
        <SwapAssetInfo
          type="from"
          senderConfig={ibcSwapConfigs.senderConfig}
          amountConfig={ibcSwapConfigs.amountConfig}
        />
        <SwapAssetInfo
          type="to"
          senderConfig={ibcSwapConfigs.senderConfig}
          amountConfig={ibcSwapConfigs.amountConfig}
        />
      </Box>
    </HeaderLayout>
  );
});
