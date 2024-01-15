import {
	AiFillCompass,
	AiFillHeart,
	AiFillHome,
	AiFillPlusCircle,
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineHome,
	AiOutlinePlusCircle,
	AiOutlineSearch,
} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { IoPaperPlaneOutline, IoPaperPlane } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
export const menu = [
	{
		title: "Home",
		icon: <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,
		activeIcon: <AiFillHome className="text-2xl mr-5"></AiFillHome>,
	},

	{
		title: "Search",
		icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
		activeIcon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,
	},

	{
		title: "Explore",
		icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>,
		activeIcon: <AiFillCompass className="text-2xl mr-5"></AiFillCompass>,
	},

	{
		title: "Reels",
		icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>,
		activeIcon: <RiVideoFill className="text-2xl mr-5"></RiVideoFill>,
	},

	{
		title: "Message",
		icon: <IoPaperPlaneOutline className="text-2xl mr-5"></IoPaperPlaneOutline>,
		activeIcon: <IoPaperPlane className="text-2xl mr-5"></IoPaperPlane>,
	},

	{
		title: "Notification",
		icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>,
		activeIcon: <AiFillHeart className="text-2xl mr-5"></AiFillHeart>,
	},

	{
		title: "Create",
		icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
		activeIcon: <AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>,
	},

	{
		title: "Profile",
		icon: <CgProfile className="text-2xl mr-5"></CgProfile>,
		activeIcon: <CgProfile className="text-2xl mr-5"></CgProfile>,
	},
];