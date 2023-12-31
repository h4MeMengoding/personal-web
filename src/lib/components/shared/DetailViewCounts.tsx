import type { ViewCounterProps } from '~/lib/components/shared/ViewCounter';
import ViewCounter from '~/lib/components/shared/ViewCounter';
import { getViewCount } from '~/lib/services/db/views';

type DetailViewCountsProps = Pick<ViewCounterProps, 'slug' | 'fontSize' | 'as'>;

const DetailViewCounts = async (props: DetailViewCountsProps) => {
  const viewCount = await getViewCount(props.slug);

  return <ViewCounter {...props} count={viewCount} trackView />;
};

export default DetailViewCounts;
