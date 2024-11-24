import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { FavoriteTools } from "@/components/profile/FavoriteTools";
import { FloatingBar } from "@/components/profile/FloatingBar";

const Profile = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="space-y-8">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback>
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>John Doe</CardTitle>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              AI enthusiast and technology explorer
            </p>
          </CardContent>
        </Card>
        <FavoriteTools />
      </div>
      <FloatingBar />
    </div>
  );
};

export default Profile;