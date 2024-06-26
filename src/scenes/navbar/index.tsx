import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

interface Props {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage)=>void
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
    const [isMenuToggled, setMenuToggled] = useState(false)
    return (
        <div className={`${flexBetween} fixed top-0 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo} />
                    {isAboveMediumScreen ? 
                    (<div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Connect Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                    </div>
                    </div>
                    )
                    : (<div className="rounded-full bg-secondary-500 p-2" onClick={()=> setMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="h-6 w-6 text-white" />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
