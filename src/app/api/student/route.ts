export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");
  const body = await req.json();

  const googleScriptUrl = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_SPREADSHEET_ID}/exec?action=${action}`;

  const gRes = await fetch(googleScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const gData = await gRes.json();

  return Response.json(gData);
}
