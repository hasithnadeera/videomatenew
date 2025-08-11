import { revalidatePath } from "next/cache";

export async function POST(req) {
  const { secret, path } = await req.json();

  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidatePath(path || "/blog");

  return Response.json({ revalidated: true, path: path || "/blog" });
}
