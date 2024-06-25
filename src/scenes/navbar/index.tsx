import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

interface Props {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage)=>void
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    return (
        <div className={`${flexBetween} fixed top-0 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6 `}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img alt="logo" src={Logo} />
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Connect Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                    </div>
                    <div className={`${flexBetween} gap-8 `}>
                    <p>Sign In</p>
                    <button>Become a Member</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
