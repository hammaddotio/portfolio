import { Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { BsInstagram, BsLinkedin, BsThreads, BsTwitterX, BsGithub } from "react-icons/bs";
import { BiBookContent, BiFileBlank, BiServer, BiUser, BiHome, BiIdCard } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <Card className="h-[100%] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="container mx-auto">
                <div className="mb-2 p-4 container mx-auto">
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="flex flex-col justify-center items-center gap-4"
                    >
                        <div className="">
                            <img
                                className="h-36 w-36 rounded-full object-cover object-center"
                                src="./assets/images/profile.jpg"
                                alt="profile"
                            />
                        </div>
                        <div className="flex gap-1 justify-start items-center">
                            <Link
                                to={"https://github.com/Mady760"}
                                className="bg-white hover:bg-black text-black hover:text-white transition-all rounded-full p-3 flex justify-center items-center"
                            >
                                <BsGithub size={24} className="" />
                            </Link>
                            <Link
                                to={"https://twitter.com/HAMMADDOTIO"}
                                className="bg-white hover:bg-black text-black hover:text-white transition-all rounded-full p-3 flex justify-center items-center"
                            >
                                <BsTwitterX size={24} className="" />
                            </Link>
                            <Link
                                to={"https://www.threads.net/@hammaddotio"}
                                className="text-black hover:text-white transition-all bg-white hover:bg-black rounded-full p-3 flex justify-center items-center"
                            >
                                <BsThreads
                                    size={24}
                                />
                            </Link>
                            <Link
                                to={"https://www.instagram.com/hammaddotio"}
                                className="bg-white hover:bg-black text-black hover:text-white transition-all rounded-full p-3 flex justify-center items-center"
                            >
                                <BsInstagram size={24} className="" />
                            </Link>
                            <Link
                                to={"https://www.linkedin.com/in/mady760"}
                                className="bg-white hover:bg-black text-black hover:text-white transition-all rounded-full p-3 flex justify-center items-center"
                            >
                                <BsLinkedin size={24} className="" />
                            </Link>
                        </div>
                    </Typography>
                </div>
                <List>
                    {/* Home */}
                    <Link to={"/"}>
                        <ListItem className="">
                            <ListItemPrefix>
                                <BiHome className="h-5 w-5" />
                            </ListItemPrefix>
                            Home
                        </ListItem>
                    </Link>
                    {/* Portfolio */}
                    <Link to={"/portfolio"}>
                        <ListItem className="">
                            <ListItemPrefix>
                                <BiBookContent className="h-5 w-5" />
                            </ListItemPrefix>
                            Portfolio
                        </ListItem>
                    </Link>
                    {/* Services */}
                    <Link to={"/services"}>
                        <ListItem className="">
                            <ListItemPrefix>
                                <BiServer className="h-5 w-5" />
                            </ListItemPrefix>
                            Services
                        </ListItem>
                    </Link>
                    {/* contact */}
                    <Link to={"/contact"}>
                        <ListItem className="">
                            <ListItemPrefix>
                                <img src={"./assets/icons/contact-form.png"} className="h-5 w-5" />
                            </ListItemPrefix>
                            Contact
                        </ListItem>
                    </Link>
                </List>
            </div>
        </Card>
    );
}

export default SideBar