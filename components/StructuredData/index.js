export default function StructuredData() {
    return (
        <>
            <script
                type='application/ld+json'
                key={'Person-jsonld'}
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://www.schema.org",
                        "@type": "Person",
                        "@id": "https://matthewtozer.com/#person",
                        "name": "Matthew Tozer",
                        "honorificPrefix": "Dr",
                        "nationality": "Canadian",
                        "hasOfferCatalog": {
                            "@id": "#OfferCatalog"
                        },
                        "hasCredential": [
                            {
                                "@type": "EducationalOccupationalCredential",
                                "credentialCategory": "degree",
                                "educationalLevel": "Doctorate",
                                "abstract": "The hybridization of the traditional baroque dance movements with the classical concerto featuring the 17th century instrument, the Viola da Gamba in combination with the string orchestra.",
                                "about": {
                                    "@type": "EducationalOccupationalProgram",
                                    "educationalCredentialAwarded": "Doctor of Philosophy (Ph.D.) - Music Composition",
                                    "startDate": "2007",
                                    "endDate": "2014",
                                    "provider": {
                                        "@type": "CollegeOrUniversity",
                                        "name": "The University of Western Ontario",
                                        "sameAs": "https://uwo.ca"
                                    }
                                }
                            },
                            {
                                "@type": "EducationalOccupationalCredential",
                                "credentialCategory": "degree",
                                "educationalLevel": "Master",
                                "about": {
                                    "@type": "EducationalOccupationalProgram",
                                    "educationalCredentialAwarded": "Master of Music - Music Composition",
                                    "startDate": "2005",
                                    "endDate": "2007",
                                    "provider": {
                                        "@type": "CollegeOrUniversity",
                                        "name": "The University of Western Ontario",
                                        "sameAs": "https://uwo.ca"
                                    }
                                }
                            },
                            {
                                "@type": "EducationalOccupationalCredential",
                                "credentialCategory": "degree",
                                "educationalLevel": "Bachelor",
                                "about": {
                                    "@type": "EducationalOccupationalProgram",
                                    "educationalCredentialAwarded": "Honours Bachelor of Music - Music Theory and Composition",
                                    "startDate": "2001",
                                    "endDate": "2005",
                                    "provider": {
                                        "@type": "CollegeOrUniversity",
                                        "name": "Queen's University",
                                        "sameAs": "https://www.queensu.ca/"
                                    }
                                }
                            },
                        ]
                        "affiliation": [
                            {
                                "@type": "Organization",
                                "name": "Ontario Registered Music Teacher's Association",
                                "url": "https://www.ormta.org/",
                                "sameAs": [
                                    "https://www.facebook.com/pages/Ontario-Registered-Music-Teachers-Association/223312484348113",
                                    "https://www.instagram.com/or.m.t.a",
                                    "https://twitter.com/ORMTA",
                                    "https://www.linkedin.com/company/ontario-registered-music-teachers-association",
                                    "https://www.youtube.com/user/TheORMTA"
                                ]
                            },
                            {
                                "@type": "Organization",
                                "name": "Canadian League of Composers",
                                "url": "https://www.composition.org/",
                                "sameAs": [
                                    "https://www.facebook.com/CLC.LCC.Canada/",
                                    "https://twitter.com/CLC_LCC",
                                    "https://www.instagram.com/clc_lcc/"
                                ]
                            },
                            {
                                "@type": "Organization",
                                "name": "Canadian Music Centre",
                                "url": "https://cmccanada.org/",
                                "sameAs": [
                                    "https://www.facebook.com/CanadianMusic",
                                    "https://twitter.com/cmcnational",
                                    "https://www.youtube.com/user/CanadianMusicCentre",
                                    "https://www.instagram.com/cmcnational/"
                                ]
                            },
                            {
                                "@type": "Organization",
                                "name": "Canadian Electroacoustic Community",
                                "url": "https://cec.sonus.ca/"
                            }
                        ],
                        "gender": "Male",
                        "description": "Composer and Educator",
                        "url": "https://matthewtozer.com",
                        "image": "https://matthewtozer.com/mtozerheadshot.jpg",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Woodstock",
                            "addressRegion": "ON",
                            "addressCountry": "Canada"
                        },
                        "email": "matttozer@gmail.com",
                        "telephone": "(519) 857-7942",
                        "sameAs": [
                            "https://twitter.com/matthewtozer",
                            "https://www.facebook.com/mtozercomposition",
                            "https://soundcloud.com/mwtozer",
                            "https://www.youtube.com/user/matttozer",
                            "https://ca.linkedin.com/in/matthew-tozer-00333b2b"
                        ]
                    }`,
                }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "OfferCatalog",
                        "@id": "#OfferCatalog",
                        "name": "Services",
                        "itemListElement": [
                            {
                                "@type": "OfferCatalog",
                                "name": "Private Music Lessons and Musical Composition",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Private Music Lessons",
                                            "description": "Teaching private music lessons in piano, history, theory, and composition."
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Music Composition"
                                        }
                                    }
                                ]
                            }
                        ]
                    }`,
                }}
                key={'OfferCatalog-jsonld'}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        "@id": "https://matthewtozer.com/#website",
                        "url": "https://matthewtozer.com",
                        "image": "https://matthewtozer.com/mtozerheadshot.jpg",
                        "inLanguage": "en-CA",
                        "author": "Matthew Tozer",
                        "keywords": "Matthew Tozer",
                        "accountablePerson": {
                            "@id": "https://matthewtozer.com/#person"
                        },
                        "about": {
                            "@id": "https://matthewtozer.com/#person"
                        }
                    }`,
                }}
                key={'Website-jsonld'}
            />
        </>
    )
}
