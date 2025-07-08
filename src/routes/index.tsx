import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useTechnologiesStore } from "@/stores/technologies";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { technologies } = useTechnologiesStore();
  const tasks = useQuery(api.tasks.get);

  console.log(tasks);

  return (
    // <div className="bg-muted dark:from-slate-900 dark:to-slate-800 rounded-lg">
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-primary rounded-xl mr-4">
            <Code2 className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="text-4xl font-bold text-primary">
            React Vite Boilerplate
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          My personal boilerplate to facilitate the creation of React
          applications with a modern and efficient stack.
        </p>
        <Alert className="flex flex-col items-center gap-2 max-w-2xl mx-auto">
          <AlertTitle>Important note</AlertTitle>
          <AlertDescription>
            This boilerplate is under development and will be improved as my
            projects progress.
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
        <Card>
          <CardHeader>
            <CardTitle>✨ Technical Stack</CardTitle>
            <CardDescription>
              Technologies included in this boilerplate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {technologies.map((technology, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{technology}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚀 Ready to start</CardTitle>
            <CardDescription>Commands to begin your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">
                  Installation
                </Badge>
                <div className="bg-muted p-3 rounded-md font-mono text-sm">
                  npm install
                </div>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  Development
                </Badge>
                <div className="bg-muted p-3 rounded-md font-mono text-sm">
                  npm run dev
                </div>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  Build
                </Badge>
                <div className="bg-muted p-3 rounded-md font-mono text-sm">
                  npm run build
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-6">
        <Separator className="mb-4" />
        <p className="text-sm text-muted-foreground">
          &copy; 2025 created by @ugtheven
        </p>
      </div>
    </div>
    // </div>
  );
}
