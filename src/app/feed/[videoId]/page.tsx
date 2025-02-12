interface PropsPage {
  params: Promise<{ videoId: string }>;
}

export default async function Page({ params }: PropsPage) {
  const { videoId } = await params;
  return <div>Video: {videoId}</div>;
}
