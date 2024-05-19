import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "./components/ui/button"
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Separator } from "./components/ui/separator"
import { Card, CardContent, CardDescription } from "./components/ui/card"

// react-icons
import { IoPlayCircleOutline } from "react-icons/io5"
import { AiOutlineAppstore } from "react-icons/ai"
import { FiRadio, FiUser } from "react-icons/fi"
import { RiPlayListLine } from "react-icons/ri"
import { MdOutlineMusicNote } from "react-icons/md"
import { LuMic2 } from "react-icons/lu"
import { ImBooks } from "react-icons/im"
import { IoIosAddCircleOutline } from "react-icons/io"

// images
import img1 from '@/assets/photo-1468817814611-b7edf94b5d60.jpg'
import img2 from '@/assets/photo-1490300472339-79e4adc6be4a.jpg'
import img3 from '@/assets/photo-1528143358888-6d3c7f67bd5d.jpg'
import img4 from '@/assets/photo-1611348586804-61bf6c080437.jpg'
import img5 from '@/assets/photo-1446185250204-f94591f7d702.jpg'
import img6 from '@/assets/photo-1513745405825-efaf9a49315f.jpg'
import img7 from '@/assets/photo-1611348586804-61bf6c080437.jpg'
import img8 from '@/assets/photo-1615247001958-f4bc92fa6a4a.jpg'






function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="flex border-b-[1px] border-b-slate-200">
      <Menubar className="border-none rounded-none w-full">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">Music</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Show Lyrics
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem disabled inset>
              Show Status Bar
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
            <MenubarItem inset disabled>Enter Full Screen</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      </nav>

      <section className="flex">
        {/* Sidebar */}
        <nav className="flex-none w-1/5 border-r-[1px] border-slate-200 p-3">

          <div className="mt-5">
            <h1 className="text-xl font-semibold ml-4 mb-2">Discover</h1>
            <div className="flex flex-col gap-1">
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <IoPlayCircleOutline className="w-5 h-5 mr-2"/> Listen Now
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <AiOutlineAppstore className="w-5 h-5 mr-2"/> Browse
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <FiRadio className="w-5 h-5 mr-2"/> Radio
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-xl font-semibold ml-4 mb-2">Library</h1>
            <div className="flex flex-col gap-1">
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <RiPlayListLine className="w-5 h-5 mr-2"/> Playlist
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <MdOutlineMusicNote className="w-5 h-5 mr-2"/> Songs
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <FiUser className="w-5 h-5 mr-2"/> Made for You
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <LuMic2 className="w-5 h-5 mr-2"/> Artist
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start font-semibold">
                <ImBooks  className="w-5 h-5 mr-2"/> Albums
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <h1 className="text-xl font-semibold ml-4 mb-2">Playlists</h1>
            <ScrollArea className="h-[200px] flex flex-col gap-1">
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Recently Added
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Recently Played
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Top Songs
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Top Albums
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Top Artist
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Logic Discography
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Bedtime Beats
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Feeling Happy
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> I miss Y2K Pop
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Runtober
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Mellow Days
              </Button>
              <Button className="bg-white text-slate-800 hover:bg-slate-50 w-full flex justify-start">
                <RiPlayListLine className="w-4 h-4 mr-2"/> Eminem Essentials
              </Button>
            </ScrollArea>
          </div>

        </nav>

        {/* Content */}
        <div className="flex-1 w-1/2 p-8">
          <div className="flex justify-between items-center">
            <Tabs defaultValue="music">
              <TabsList>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="podcast">Podcast</TabsTrigger>
                <TabsTrigger value="live" disabled>Live</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button className="h-9">
              <IoIosAddCircleOutline className="w-5 h-5 mr-2" /> Add music
            </Button>
          </div>

          <div className="pt-7">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Listen Now</h1>
              <span className="text-sm text-gray-500">Top picks for you. Updated daily.</span>
            </div>
            <Separator />
            <ScrollArea className="mt-3 w-full">
              <div className="flex flex-row gap-4 mb-5">
                <Card className="border-none w-[17rem]">
                  <CardContent className="p-0">
                    <img src={img4} alt="image" className="rounded-md w-full cursor-pointer"/>
                    <p className="mt-3 text-sm font-semibold">React Rendezvous</p>
                    <CardDescription className="text-xs mt-1">Ethan Byte</CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none w-[17rem]">
                  <CardContent className="p-0">
                    <img src={img1} alt="image" className="rounded-md w-full cursor-pointer"/>
                    <p className="mt-3 text-sm font-semibold">Async Awakenings</p>
                    <CardDescription className="text-xs mt-1">Nina Netcode</CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none w-[17rem]">
                  <CardContent className="p-0">
                    <img src={img3} alt="image" className="rounded-md w-full cursor-pointer"/>
                    <p className="mt-3 text-sm font-semibold">The Art of Reusability</p>
                    <CardDescription className="text-xs mt-1">Lena Logic</CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-none w-[17rem]">
                  <CardContent className="p-0">
                    <img src={img2} alt="image" className="rounded-md w-full cursor-pointer"/>
                    <p className="mt-3 text-sm font-semibold">Stateful Symphony</p>
                    <CardDescription className="text-xs mt-1">Beth Binary</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="pt-7">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Made for You</h1>
              <span className="text-sm text-gray-500">Your personal playlist. Updated daily.</span>
            </div>
            <Separator />
            <div className="mt-3 flex flex-row gap-4">
              <Card className="border-none w-[10rem]">
                <CardContent className="p-0">
                  <img src={img8} alt="image" className="rounded-md w-full cursor-pointer"/>
                  <p className="mt-3 text-sm font-semibold">Thinking Components</p>
                  <CardDescription className="text-xs mt-1">Lena Logic</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none w-[10rem]">
                <CardContent className="p-0">
                  <img src={img6} alt="image" className="rounded-md w-full cursor-pointer"/>
                  <p className="mt-3 text-sm font-semibold">Functional Fury</p>
                  <CardDescription className="text-xs mt-1">Beth Binary</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none w-[10rem]">
                <CardContent className="p-0">
                  <img src={img7} alt="image" className="rounded-md w-full cursor-pointer"/>
                  <p className="mt-3 text-sm font-semibold">React Rendezvous</p>
                  <CardDescription className="text-xs mt-1">Ethan Byte</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none w-[10rem]">
                <CardContent className="p-0">
                  <img src={img5} alt="image" className="rounded-md w-full cursor-pointer"/>
                  <p className="mt-3 text-sm font-semibold">Stateful Symphony</p>
                  <CardDescription className="text-xs mt-1">Beth Binary</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none w-[10rem]">
                <CardContent className="p-0">
                  <img src={img1} alt="image" className="rounded-md w-full cursor-pointer"/>
                  <p className="mt-3 text-sm font-semibold">Async Awakenings</p>
                  <CardDescription className="text-xs mt-1">Nina Netcode</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-none w-[10rem]">
                <CardContent className="p-0">
                  <img src={img2} alt="image" className="rounded-md w-full cursor-pointer"/>
                  <p className="mt-3 text-sm font-semibold">The Art of Reusability</p>
                  <CardDescription className="text-xs mt-1">Lena Logic</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
