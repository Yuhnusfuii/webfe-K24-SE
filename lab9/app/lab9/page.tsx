"use client";
import home from "@/components/tab1/home";
import page2 from "@/components/tab1/profile";
import page3 from "@/components/tab1/login";
import { Tabs, TabsContent,TabsList, TabsTrigger,} from "@/components/ui/tabs";

export default function Lab09Page() {
    return (
      <div className="p-8">
        <Tabs defaultValue="home" className="w-full">
            {/* Tab header */}
            <TabsList className="mb-6">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            {/* Tab 1 */}
            <TabsContent value="home">
                {home()}
            </TabsContent>

            {/* Tab 2 */}
            <TabsContent value="profile">
                {page2()}
            </TabsContent>
            {/* Tab 3 */}
            <TabsContent value="login">
                {page3()}
            </TabsContent>
            <p className="text-muted-foreground mb-6">
            </p>
        </Tabs>
      </div>
    );
  }