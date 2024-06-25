import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Marketing() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Marketing</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Marketing content goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Marketing;