import { NextResponse } from "next/server";
import { Document, Page, StyleSheet, Text, View, pdf } from "@react-pdf/renderer";
import { getResumeData } from "@/lib/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.3,
    color: "#111827",
    paddingTop: 24,
    paddingBottom: 22,
    paddingHorizontal: 26,
    backgroundColor: "#ffffff",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#d1d5db",
    borderBottomStyle: "solid",
    paddingBottom: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 17,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.2,
  },
  role: {
    marginTop: 2,
    fontSize: 9,
    color: "#1f2937",
  },
  contactRow: {
    marginTop: 4,
    fontSize: 8.2,
    color: "#374151",
  },
  section: {
    marginTop: 7,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 0.8,
    color: "#0f172a",
    marginBottom: 3,
  },
  paragraph: {
    fontSize: 8.6,
    color: "#1f2937",
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bulletDot: {
    width: 8,
    fontSize: 8,
    color: "#0f172a",
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: "#1f2937",
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  col: {
    flex: 1,
  },
  itemHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 8,
  },
  itemTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.8,
    color: "#0f172a",
  },
  itemMeta: {
    fontSize: 7.8,
    color: "#4b5563",
    textAlign: "right",
  },
  itemSub: {
    fontSize: 8,
    color: "#374151",
    marginTop: 1,
    marginBottom: 2,
  },
  projectBlock: {
    marginBottom: 4,
  },
  projectStack: {
    fontSize: 7.6,
    color: "#4b5563",
    marginBottom: 1,
  },
  chips: {
    fontSize: 8.3,
    color: "#111827",
  },
  footerNote: {
    marginTop: 5,
    fontSize: 7.3,
    color: "#6b7280",
    textAlign: "center",
  },
});

function ResumeDocument({ data }: { data: Awaited<ReturnType<typeof getResumeData>> }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.fullName}</Text>
          <Text style={styles.role}>{data.roleLine}</Text>
          <Text style={styles.contactRow}>
            {data.email} | {data.location} | LinkedIn: {data.linkedin} | GitHub: {data.github} | Portfolio: {data.portfolio}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={styles.paragraph}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
          <Text style={styles.chips}>{data.technicalSkills.slice(0, 20).join(" | ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TOOLS & TECHNOLOGIES</Text>
          <Text style={styles.chips}>{data.toolsAndTech.join(" | ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SELECTED PROJECTS</Text>
          {data.projects.slice(0, 5).map((project) => (
            <View key={project.title} style={styles.projectBlock}>
              <View style={styles.itemHead}>
                <Text style={styles.itemTitle}>{project.title}</Text>
                <Text style={styles.itemMeta}>{project.link ?? "GitHub"}</Text>
              </View>
              <Text style={styles.projectStack}>Stack: {project.stack}</Text>
              {project.bullets.slice(0, 2).map((bullet, index) => (
                <View key={`${project.title}-${index}`} style={styles.bullet}>
                  <Text style={styles.bulletDot}>-</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={[styles.section, styles.row]}>
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {data.education.map((edu) => (
              <View key={`${edu.degree}-${edu.institution}`} style={{ marginBottom: 4 }}>
                <View style={styles.itemHead}>
                  <Text style={styles.itemTitle}>{edu.degree}</Text>
                  <Text style={styles.itemMeta}>{edu.period}</Text>
                </View>
                <Text style={styles.itemSub}>{edu.institution}</Text>
                <Text style={styles.itemMeta}>{edu.score}</Text>
              </View>
            ))}
          </View>

          <View style={styles.col}>
            <Text style={styles.sectionTitle}>ACHIEVEMENTS & CERTIFICATIONS</Text>
            {data.achievements.slice(0, 4).map((item) => (
              <View key={item} style={styles.bullet}>
                <Text style={styles.bulletDot}>-</Text>
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 6 }]}>STRENGTHS</Text>
            <Text style={styles.chips}>{data.softSkills.join(" | ")}</Text>

            <Text style={[styles.sectionTitle, { marginTop: 6 }]}>TARGET KEYWORDS</Text>
            <Text style={styles.paragraph}>{data.keywords.join(", ")}</Text>
          </View>
        </View>

        <Text style={styles.footerNote}>ATS-friendly one-page resume generated dynamically from portfolio data.</Text>
      </Page>
    </Document>
  );
}

export async function GET(request: Request) {
  try {
    const data = await getResumeData();
    const url = new URL(request.url);
    const shouldDownload = url.searchParams.get("download") === "1";

    const instance = pdf(<ResumeDocument data={data} />);
    const blob = await instance.toBlob();
    const pdfBytes = new Uint8Array(await blob.arrayBuffer());

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Content-Disposition": shouldDownload
          ? 'attachment; filename="Sanikommu_Bhanu_Resume.pdf"'
          : 'inline; filename="Sanikommu_Bhanu_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Resume generation failed", error);
    return NextResponse.json(
      { error: "Unable to generate resume right now." },
      { status: 500 }
    );
  }
}
