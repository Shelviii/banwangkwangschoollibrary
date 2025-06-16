export async function POST(req: Request) {
  const body = await req.json();

  const googleScriptUrl = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_SPREADSHEET_ID}/exec?action=signin`;

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get("studentId");

  const googleUrl = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_SPREADSHEET_ID}/exec?studentId=${studentId}`;
  const res = await fetch(googleUrl);
  const data = await res.json();

  return Response.json(data);
}
