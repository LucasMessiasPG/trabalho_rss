<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="rss">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="channel" minOccurs="1" maxOccurs="1">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="title"></xs:element>
                            <xs:element name="link"></xs:element>
                            <xs:element name="description"></xs:element>
                            <xs:element name="item" minOccurs="1" maxOccurs="unbounded">
                                <xs:complexType>
                                    <xs:sequence>
                                        <xs:element name="title" type="xs:string"></xs:element>
                                        <xs:element name="link" type="xs:anyURI"></xs:element>
                                        <xs:element name="description" type="xs:string"></xs:element>
                                        <xs:element name="pubDate" type="xs:string"></xs:element>
                                    </xs:sequence>
                                </xs:complexType>
                            </xs:element>

                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>

            <xs:attribute name="version" type="xs:double"></xs:attribute>
        </xs:complexType>
    </xs:element>
</xs:schema>