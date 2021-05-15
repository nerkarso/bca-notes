import { withExtractListItems } from '@/middlewares/v0/withExtractListItems';
import { withProtectedRouteMobile } from '@/middlewares/v0/withProtectedRoute';
import { withAllowedMethods } from '@/middlewares/withAllowedMethods';

function handler(req, res) {
  return res.json({
    results: res.listItems,
  });
}

export default withAllowedMethods(
  withProtectedRouteMobile(withExtractListItems(handler), '/frmResultTabulation.aspx'),
  ['GET'],
);
