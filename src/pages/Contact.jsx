import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";
import Main from "../components/Layout/Main";

const Contact = () => {
    return (
        <Main>
            <div>
                <div className='w-[10rem] my-10'>
                    <h1 className=' mb-2 text-2xl font-bold uppercase'>contact</h1>
                    <hr className='' />
                </div>
            </div>
            <div className="flex justify-center items-center container mx-auto">
                <Card color="transparent" shadow={false}>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" autoCapitalize={true} autoFocus={true} security={true}>
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Name
                            </Typography>
                            <Input
                                type="text"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Message
                            </Typography>
                            <Textarea
                                type="text"
                                size="lg"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>

                        <Button className="mt-6" fullWidth>
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
        </Main>
    );
}

export default Contact