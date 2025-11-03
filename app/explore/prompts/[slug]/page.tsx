import Link from 'next/link';
import { readyUseCases, type UseCase, type UseCaseSlug } from '../_data';
import UseCaseDetailClient from './UseCaseDetailClient';

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseData: UseCase | undefined = readyUseCases.find(c => c.id === (slug as UseCaseSlug));

  if (!caseData) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-5">
        <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Use case not found</h1>
          <p className="text-gray-600 mb-6">The requested prompt collection doesn’t exist. Please return to the Prompt Library and choose a use case.</p>
          <Link href="/explore/prompts" className="inline-flex items-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-medium hover:bg-red-700">Back to Prompt Library</Link>
        </div>
      </div>
    );
  }

  return (
    <UseCaseDetailClient caseData={caseData} />
  );
}
