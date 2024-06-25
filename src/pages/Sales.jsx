import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Sales() {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Sales content goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sales;