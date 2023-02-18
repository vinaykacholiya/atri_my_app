import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex15Cb, useTextBox27Cb, useTextBox17Cb, useTextBox18Cb, useTextBox20Cb, useButton5Cb } from "../page-cbs/AboutUs";
import "../page-css/AboutUs.css";
import "../custom/AboutUs";

export default function AboutUs() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex15Props = useStore((state)=>state["AboutUs"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["AboutUs"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const TextBox27Props = useStore((state)=>state["AboutUs"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["AboutUs"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox17Props = useStore((state)=>state["AboutUs"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["AboutUs"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["AboutUs"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["AboutUs"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox20Props = useStore((state)=>state["AboutUs"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["AboutUs"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Button5Props = useStore((state)=>state["AboutUs"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["AboutUs"]["Button5"]);
const Button5Cb = useButton5Cb()

  return (<>
  <Flex1 className="p-AboutUs Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox1 className="p-AboutUs TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox1 className="p-AboutUs TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<TextBox1 className="p-AboutUs TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Button className="p-AboutUs Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex1>
<TextBox1 className="p-AboutUs TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
  </>);
}
