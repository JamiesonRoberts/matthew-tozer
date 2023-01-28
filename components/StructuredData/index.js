export default function StructuredData({ locationData }) {
    const dayMapping = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    }

    const openingHoursSpecification = []

    locationData.opening_hours.periods.forEach((period) => {
        const opens = `${period.open.time.substring(
            0,
            2
        )}:${period.open.time.substring(2)}`
        const closes = `${period.close.time.substring(
            0,
            2
        )}:${period.close.time.substring(2)}`
        openingHoursSpecification.push({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: `${dayMapping[period.open.day]}`,
            opens,
            closes,
        })
    })

    return (
        <>
            <script
                type='application/ld+json'
                key={'Person-jsonld'}
                id={'person'}
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "http://www.schema.org",
                        "@type": "Person",
                        "@id": "https://matthewtozer.com/#person",
                        "name": "Matthew Tozer",
                        "honorificPrefix": "Dr",
                        "nationality": "Canadian",
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
                            }
                        ],
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
                        "telephone": "+15198577942",
                        "sameAs": [
                            "https://twitter.com/matthewtozer",
                            "https://www.facebook.com/matthewtozer",
                            "https://soundcloud.com/mwtozer",
                            "https://www.youtube.com/user/matttozer",
                            "https://ca.linkedin.com/in/matthew-tozer-00333b2b"
                        ]
                    }`,
                }}
            />
            <script
                type='application/ld+json'
                key={'LocalBusiness-jsonld'}
                id={'localBusiness'}
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://matthewtozer.com/#localbusiness",
                        "name": "Matthew Tozer Music Lesson",
                        "contactPoint": {
                            "@id": "https://matthewtozer.com/#person"
                        },
                        "url": "https://matthewtozer.com",
                        "sameAs": [
                            "https://maps.google.com/?cid=9221277794800284912",
                            "https://www.facebook.com/mtozercomposition"
                        ],
                        "email": "matttozer@gmail.com",
                        "telephone": "+15198577942",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "57 Earlscourt Crescent",
                            "addressLocality": "Woodstock",
                            "addressRegion": "ON",
                            "postalCode": "N4S5H2",
                            "addressCountry": "CA"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": ${locationData.rating},
                            "reviewCount": ${locationData.user_ratings_total}
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": ${locationData.geometry.location.lat},
                            "longitude": ${locationData.geometry.location.lng}
                        },
                        "openingHoursSpecification": ${JSON.stringify(
                            openingHoursSpecification
                        )}
                    }`,
                }}
            />
            <script
                type='application/ld+json'
                key={'Website-jsonld'}
                id={'website'}
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
            />
        </>
    )
}
