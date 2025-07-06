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

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { technologies } = useTechnologiesStore();

  return (
    <div className="bg-muted dark:from-slate-900 dark:to-slate-800 rounded-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-black dark:bg-white rounded-xl mr-4">
              <Code2 className="h-8 w-8 text-white dark:text-black" />
            </div>
            <h1 className="text-4xl font-bold text-black dark:text-white">
              React Vite Boilerplate
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Mon boilerplate personnel pour faciliter la création d'applications
            React avec une stack moderne et efficace.
          </p>
          <Alert className="flex flex-col items-center gap-2 max-w-2xl mx-auto">
            <AlertTitle>Note importante</AlertTitle>
            <AlertDescription>
              Ce boilerplate est en cours de développement et sera amélioré au
              fil de mes projets.
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
          <Card>
            <CardHeader>
              <CardTitle>✨ Stack technique</CardTitle>
              <CardDescription>
                Les technologies incluses dans ce boilerplate
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
              <CardTitle>🚀 Prêt à démarrer</CardTitle>
              <CardDescription>
                Les commandes pour commencer votre projet
              </CardDescription>
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
                    Développement
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
    </div>
  );
}
