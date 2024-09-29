export interface NYTArticleProps {
    abstract: string;
    web_url: string;
    snippet: string;
    lead_paragraph: string;
    print_section: string;
    print_page: string;
    source: string;
    multimedia: any[]; // Assuming this is an array of objects, you can replace 'any' with a specific type if needed
    headline: {
      main: string;
      kicker: string | null;
      content_kicker: string | null;
      print_headline: string | null;
      name: string | null;
      seo: string | null;
      sub: string | null;
    };
    keywords: string[]; // Assuming this is an array of strings, adjust if needed
    pub_date: string;
    document_type: string;
    news_desk: string;
    section_name: string;
    byline: {
      original: string | null;
      person: any[]; // You can define a specific type if needed for 'person'
      organization: string | null;
    };
    type_of_material: string;
    _id: string;
    word_count: number;
    uri: string;
  }
  