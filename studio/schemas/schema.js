// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import crewMember from "./crewMember";
import castMember from "./castMember";
import movie from "./movie";
import person from "./person";
import screening from "./screening";
import plotSummary from "./plotSummary";
import plotSummaries from "./plotSummaries";
import catering from "./catering/catering";
import cateringImageSlideShow from "./catering/cateringImageSlideShow";
import cateringQuoteSlideShow from "./catering/cateringQuoteSlideShow";
import cateringHeaderImage from "./catering/cateringHeaderImage";
import cateringAppetizers from "./catering/cateringAppetizers";
import cateringMainCourses from "./catering/cateringMainCourses";
import cateringDesserts from "./catering/cateringDesserts";
import cateringDescription from "./catering/cateringDescription";
import cateringTitle from "./catering/cateringTitle";
import cateringContentImages from "./catering/cateringContentImages";
import frontpage from "./frontpage/frontpage";
import frontpageLinks from "./frontpage/frontpage-links";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    movie,
    person,
    screening,
    catering,
    frontpage,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    cateringImageSlideShow,
    cateringQuoteSlideShow,
    cateringHeaderImage,
    cateringAppetizers,
    cateringMainCourses,
    cateringDesserts,
    cateringDescription,
    cateringTitle,
    cateringContentImages,
    frontpageLinks,
    blockContent,
    plotSummary,
    plotSummaries,
    castMember,
    crewMember,
  ]),
});
