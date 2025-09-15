import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export function AiSuggestions() {
  return (
    <Card className="bg-accent/50 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-primary" />
            <CardTitle>AI-Powered Insights</CardTitle>
        </div>
        <CardDescription>Suggestions to enhance your search.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm text-foreground/80">
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">&#10148;</span>
            <p><span className="font-semibold">Standout Feature:</span> This property's floor-to-ceiling windows are a rare find, offering exceptional natural light.</p>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">&#10148;</span>
            <p><span className="font-semibold">Consider Filtering For:</span> Properties with a 'Home Office' space, a growing trend for remote work.</p>
          </li>
           <li className="flex items-start">
            <span className="text-primary mr-2 mt-1">&#10148;</span>
            <p><span className="font-semibold">Market Tip:</span> Similar properties in this area are often leased within 2 weeks. Act fast if you're interested!</p>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
