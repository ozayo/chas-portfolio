import StackIcon from "tech-stack-icons";
import Marquee from "react-fast-marquee";

const MarqueeHome = () => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-center max-w-2xl flex-col mx-auto text-center">
        {/*<h2 className="text-xl font-bold mb-2">my stack</h2>
         <p className="mb-8">
          Some of the software, libraries and frameworks I am using and
          learning.
        </p> */}
        <Marquee
          direction="left"
          gradient="true"
          gradientWidth="100px"
          pauseOnHover="true"
        >
          <StackIcon name="aws" className="p-2 size-16 dark:invert" />
          <StackIcon name="astro" className="p-2 size-16 dark:invert" />
          <StackIcon name="cloudinary" className="p-2 size-16" />
          <StackIcon name="digitalocean" className="p-2 size-16" />
          <StackIcon name="amznwebserv" className="p-2 size-16" />
          <StackIcon name="apache" className="p-2 size-16" />
          <StackIcon name="cloudflare" className="p-2 size-16" />
          <StackIcon name="css3" className="p-2 size-16" />
          <StackIcon name="html5" className="p-2 size-16" />
          <StackIcon name="js" className="p-2 size-16" />
          <StackIcon name="reactjs" className="p-2 size-16" />
          <StackIcon name="vitejs" className="p-2 size-16" />
          <StackIcon name="vuejs" className="p-2 size-16" />
          <StackIcon name="nextjs" className="p-2 size-16 dark:invert" />
          <StackIcon name="git" className="p-2 size-16" />
          <StackIcon name="github" className="p-2 size-16 dark:invert" />
          <StackIcon name="graphql" className="p-2 size-16" />
          <StackIcon name="markdown" className="p-2 size-16 dark:invert" />
          <StackIcon name="npm2" className="p-2 size-16" />
          <StackIcon name="nuxtjs" className="p-2 size-16" />
          <StackIcon name="php" className="p-2 size-16" />
          <StackIcon name="postman" className="p-2 size-16" />
          <StackIcon name="railway" className="p-2 size-16 dark:invert" />
          <StackIcon name="redux" className="p-2 size-16" />
          <StackIcon name="wordpress" className="p-2 size-16" />
        </Marquee>
        <Marquee
          direction="right"
          gradient="true"
          gradientWidth="100px"
          pauseOnHover="true"
        >
          <StackIcon name="adobe" className="p-2 size-16" />
          <StackIcon name="ai" className="p-2 size-16" />
          <StackIcon name="ps" className="p-2 size-16" />
          <StackIcon name="id" className="p-2 size-16" />
          <StackIcon name="xd" className="p-2 size-16" />
          <StackIcon name="figma" className="p-2 size-16" />
          <StackIcon name="tailwindcss" className="p-2 size-16" />
          <StackIcon name="chakraui" className="p-2 size-16" />
          <StackIcon name="headlessui" className="p-2 size-16" />
          <StackIcon name="radixui" className="p-2 size-16 dark:invert" />
          <StackIcon name="shadcnui" className="p-2 size-16 dark:invert" />
          <StackIcon name="bootstrap5" className="p-2 size-16" />
          <StackIcon name="less" className="p-2 size-16" />
          <StackIcon name="materialui" className="p-2 size-16" />
          <StackIcon name="sass" className="p-2 size-16" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeHome;
