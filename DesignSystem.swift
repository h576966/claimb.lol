import AppKit
import Darwin
import Foundation
import SwiftUI

/// Comprehensive design system for the Claimb2 application.
/// Provides consistent colors, typography, spacing, and theme management.
/// Implements Apple Watch-inspired adaptive design with glass effects and transparency.

// MARK: - Theme Manager

/// Centralized theme management for light/dark mode switching.
/// Provides consistent theme state across the application with proper color scheme handling.
@Observable
public class ThemeManager {
    public enum ThemeMode {
        case light, dark
    }

    public var currentMode: ThemeMode = .dark
    public static let shared = ThemeManager()

    private init() {}

    /// Toggle between light and dark theme modes.
    /// Updates the current theme and triggers UI updates across the application.
    public func toggleMode() {
        switch currentMode {
        case .light:
            currentMode = .dark
        case .dark:
            currentMode = .light
        }
    }

    /// Get the preferred color scheme for SwiftUI views.
    /// Returns the appropriate ColorScheme based on current theme mode.
    /// - Returns: ColorScheme.light or ColorScheme.dark
    public func preferredColorScheme() -> ColorScheme? {
        switch currentMode {
        case .light: return .light
        case .dark: return .dark
        }
    }

    /// Get a human-readable description of the current theme mode.
    /// - Returns: String description of the current theme
    public func modeDescription() -> String {
        switch currentMode {
        case .light: return "Light"
        case .dark: return "Dark"
        }
    }
}

// MARK: - Design System for Claimb

/// Central design system providing consistent visual elements across the application.
/// Includes colors, typography, spacing, and layout constants for a cohesive user experience.
public struct ClaimbDesign {

    // MARK: - Colors

    /// Comprehensive color palette with adaptive light/dark mode support.
    /// Implements Apple Watch-inspired design with glass effects and performance-based color coding.
    public struct Colors {
        // MARK: - Brand Colors (same in light/dark)
        public static let primary = Color(hex: "66cc99")  // Teal green (positive performance color)
        public static let primaryLight = Color(hex: "66cc99")  // Same as primary for consistency

        // MARK: - Adaptive Background Colors (Apple Watch-inspired)
        public static let background = Color(lightHex: "ebebf0", darkHex: "000000")  // Main app background - darker light mode
        public static let backgroundSecondary = Color(lightHex: "d8d8dd", darkHex: "1c1c1e")  // Secondary background
        public static let backgroundTertiary = Color(lightHex: "c7c7cc", darkHex: "2c2c2e")  // Tertiary background

        // MARK: - Adaptive Surface Colors with Apple Watch transparency
        public static let surfacePrimary = Color(lightHex: "f2f2f7", darkHex: "1c1c1e")  // Main card background
        public static let surfaceSecondary = Color(lightHex: "e5e5ea", darkHex: "2c2c2e")  // Secondary surface
        public static let surfaceTertiary = Color(lightHex: "d1d1d6", darkHex: "3a3a3c")  // Tertiary surface for recommendations
        public static let surfaceAccent = Color(lightHex: "d1d1d6", darkHex: "3a3a3c")  // Highlighted surfaces
        public static let surfaceOverlay = Color(lightHex: "ffffff", darkHex: "2c2c2e")  // Overlay surfaces

        // MARK: - Glass/Transparency Effects
        public static let glassLight = Color.white.opacity(0.85)
        public static let glassDark = Color.black.opacity(0.75)
        public static let glassAdaptive = Color(lightHex: "ffffff", darkHex: "1c1c1e").opacity(0.85)

        // MARK: - Adaptive Text Colors with enhanced contrast
        public static let textPrimary = Color(lightHex: "1d1d1f", darkHex: "ffffff")  // Main text - slightly darker in light mode
        public static let textSecondary = Color(lightHex: "48484a", darkHex: "98989d")  // Supporting text
        public static let textTertiary = Color(lightHex: "6d6d70", darkHex: "6e6e73")  // Subtle text
        public static let textAccent = Color(hex: "66cc99")  // Brand accent text (positive performance color)

        // MARK: - Adaptive UI Element Colors
        public static let uiDefault = Color(lightHex: "1d1d1f", darkHex: "ffffff")  // UI elements that need to contrast
        public static let uiBorder = Color(lightHex: "c6c6c8", darkHex: "38383a")  // Borders
        public static let uiBorderSubtle = Color(lightHex: "d1d1d6", darkHex: "2c2c2e")  // Subtle borders
        public static let uiSeparator = Color(lightHex: "c6c6c8", darkHex: "48484a")  // Separators

        // MARK: - Performance colors (same in light/dark)
        public static let positive = Color(hex: "66cc99")  // Teal green
        public static let negative = Color(hex: "d8674a")  // Orange red
        public static let warning = Color(hex: "ff9f0a")  // Orange

        // MARK: - Rank colors (same in light/dark)
        public static let bronze = Color(hex: "CD7F32")
        public static let silver = Color(hex: "C0C0C0")
        public static let gold = Color(hex: "FFD700")
        public static let platinum = Color(hex: "E5E4E2")
        public static let diamond = Color(hex: "B9F2FF")
        public static let master = Color(hex: "9d4edd")
        public static let grandmaster = Color(hex: "ff006e")
        public static let challenger = Color(hex: "f72585")
    }

    // MARK: - Typography

    /// Typography system using Inter font family for consistent text styling.
    /// Provides semantic font styles with proper sizing and weight hierarchy.
    public struct Typography {
        // Header fonts using Inter
        public static let title = Font.custom("Inter-Bold", size: 34, relativeTo: .largeTitle)
        public static let title2 = Font.custom("Inter-Bold", size: 28, relativeTo: .title)
        public static let title3 = Font.custom("Inter-Bold", size: 22, relativeTo: .title2)
        public static let headline = Font.custom("Inter-SemiBold", size: 20, relativeTo: .title3)
        public static let subheadline = Font.custom("Inter-Medium", size: 17, relativeTo: .headline)

        // Body text using system font (for readability)
        public static let body = Font.title3
        public static let caption = Font.body
        public static let caption2 = Font.subheadline

        // Button text using Inter
        public static let button = Font.custom("Inter-Medium", size: 16, relativeTo: .body)
        public static let buttonSmall = Font.custom("Inter-Medium", size: 14, relativeTo: .caption)
        public static let buttonLarge = Font.custom(
            "Inter-SemiBold", size: 18, relativeTo: .headline)
    }

    // MARK: - Spacing
    public struct Spacing {
        public static let xs: CGFloat = 4
        public static let sm: CGFloat = 8
        public static let md: CGFloat = 16
        public static let lg: CGFloat = 24
        public static let xl: CGFloat = 32
        public static let xxl: CGFloat = 48
    }

    // MARK: - Corner Radius
    public struct CornerRadius {
        public static let sm: CGFloat = 6
        public static let md: CGFloat = 8
        public static let lg: CGFloat = 12
        public static let xl: CGFloat = 16
        public static let xxl: CGFloat = 20
    }

    // MARK: - Shadows and Effects
    public struct Shadows {
        public static let subtle = Color.black.opacity(0.03)
        public static let medium = Color.black.opacity(0.06)
        public static let strong = Color.black.opacity(0.12)
        public static let elevated = Color.black.opacity(0.25)
    }

    public struct Effects {
        // Glass morphism effects for Apple Watch-like appearance
        public static let glassMorphism = Material.regularMaterial
        public static let glassMorphismThin = Material.thinMaterial
        public static let glassMorphismThick = Material.thickMaterial

        // Blur effects
        public static let backgroundBlur: CGFloat = 20
        public static let cardBlur: CGFloat = 10
    }

    // MARK: - Text Formatting Utilities
    public struct TextFormatting {
        /// Cleans up markdown formatting from OpenAI responses for better readability in SwiftUI
        public static func cleanMarkdownFormatting(_ text: String) -> String {
            var cleanedText = text

    
            cleanedText = cleanedText.replacingOccurrences(
                of: #"###\s*"#,
                with: "",
                options: .regularExpression
            )

    
            cleanedText = cleanedText.replacingOccurrences(
                of: #"\*\*(.*?)\*\*"#,
                with: "$1",
                options: .regularExpression
            )

            // Clean up any extra whitespace that might result from the formatting removal
            cleanedText = cleanedText.replacingOccurrences(
                of: #"\n\s*\n\s*\n"#,
                with: "\n\n",
                options: .regularExpression
            )

            return cleanedText.trimmingCharacters(in: .whitespacesAndNewlines)
        }
    }
}

// MARK: - Custom View Modifiers

public struct ClaimbCardStyle: ViewModifier {
    let isHighlighted: Bool
    let variant: CardVariant

    public enum CardVariant {
        case primary, secondary, glass, elevated
    }

    public init(isHighlighted: Bool = false, variant: CardVariant = .primary) {
        self.isHighlighted = isHighlighted
        self.variant = variant
    }

    public func body(content: Content) -> some View {
        content
            .padding(ClaimbDesign.Spacing.md)
            .background(backgroundForVariant)
            .cornerRadius(ClaimbDesign.CornerRadius.lg)
            .overlay(overlayForVariant)
            .shadow(color: shadowColor, radius: shadowRadius, x: 0, y: shadowOffset)
    }

    @ViewBuilder
    private var backgroundForVariant: some View {
        switch variant {
        case .primary:
            RoundedRectangle(cornerRadius: ClaimbDesign.CornerRadius.lg)
                .fill(ClaimbDesign.Colors.surfacePrimary)
        case .secondary:
            RoundedRectangle(cornerRadius: ClaimbDesign.CornerRadius.lg)
                .fill(ClaimbDesign.Colors.surfaceSecondary)
        case .glass:
            RoundedRectangle(cornerRadius: ClaimbDesign.CornerRadius.lg)
                .fill(ClaimbDesign.Colors.glassAdaptive)
                .background(ClaimbDesign.Effects.glassMorphism)
        case .elevated:
            RoundedRectangle(cornerRadius: ClaimbDesign.CornerRadius.lg)
                .fill(ClaimbDesign.Colors.surfaceOverlay)
        }
    }

    @ViewBuilder
    private var overlayForVariant: some View {
        RoundedRectangle(cornerRadius: ClaimbDesign.CornerRadius.lg)
            .stroke(
                isHighlighted
                    ? ClaimbDesign.Colors.primary
                    : borderColorForVariant,
                lineWidth: isHighlighted ? 2 : 1
            )
    }

    private var borderColorForVariant: Color {
        switch variant {
        case .primary, .secondary:
            return ClaimbDesign.Colors.uiBorder
        case .glass, .elevated:
            return ClaimbDesign.Colors.uiBorderSubtle
        }
    }

    private var shadowColor: Color {
        switch variant {
        case .primary, .secondary:
            return ClaimbDesign.Shadows.subtle
        case .glass:
            return ClaimbDesign.Shadows.medium
        case .elevated:
            return ClaimbDesign.Shadows.strong
        }
    }

    private var shadowRadius: CGFloat {
        switch variant {
        case .primary, .secondary:
            return 8
        case .glass:
            return 12
        case .elevated:
            return 16
        }
    }

    private var shadowOffset: CGFloat {
        switch variant {
        case .primary, .secondary:
            return 2
        case .glass:
            return 4
        case .elevated:
            return 6
        }
    }
}

public struct ClaimbButtonStyle: ButtonStyle {
    let variant: ButtonVariant
    let size: ButtonSize

    public enum ButtonVariant {
        case primary, secondary, ghost, destructive
    }

    public enum ButtonSize {
        case small, medium, large
    }

    public init(variant: ButtonVariant = .primary, size: ButtonSize = .medium) {
        self.variant = variant
        self.size = size
    }

    public func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(fontForSize)
            .padding(.horizontal, horizontalPadding)
            .padding(.vertical, verticalPadding)
            .background(backgroundColorForVariant)
            .foregroundColor(foregroundColorForVariant)
            .cornerRadius(ClaimbDesign.CornerRadius.md)
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .opacity(configuration.isPressed ? 0.8 : 1.0)
            .animation(.easeInOut(duration: 0.1), value: configuration.isPressed)
    }

    private var fontForSize: Font {
        switch size {
        case .small: return ClaimbDesign.Typography.buttonSmall
        case .medium: return ClaimbDesign.Typography.button
        case .large: return ClaimbDesign.Typography.buttonLarge
        }
    }

    private var horizontalPadding: CGFloat {
        switch size {
        case .small: return ClaimbDesign.Spacing.sm
        case .medium: return ClaimbDesign.Spacing.md
        case .large: return ClaimbDesign.Spacing.lg
        }
    }

    private var verticalPadding: CGFloat {
        switch size {
        case .small: return ClaimbDesign.Spacing.xs
        case .medium: return ClaimbDesign.Spacing.sm
        case .large: return ClaimbDesign.Spacing.md
        }
    }

    private var backgroundColorForVariant: Color {
        switch variant {
        case .primary: return ClaimbDesign.Colors.primary
        case .secondary: return ClaimbDesign.Colors.surfacePrimary
        case .ghost: return Color.clear
        case .destructive: return ClaimbDesign.Colors.negative
        }
    }

    private var foregroundColorForVariant: Color {
        switch variant {
        case .primary: return .white
        case .secondary: return ClaimbDesign.Colors.textPrimary
        case .ghost: return ClaimbDesign.Colors.primary
        case .destructive: return .white
        }
    }
}

// MARK: - Text Style Modifiers

public struct ClaimbTextStyle: ViewModifier {
    let style: TextStyle

    public enum TextStyle {
        case primary, secondary, tertiary, accent
    }

    public init(_ style: TextStyle) {
        self.style = style
    }

    public func body(content: Content) -> some View {
        content
            .foregroundColor(colorForStyle)
    }

    private var colorForStyle: Color {
        switch style {
        case .primary: return ClaimbDesign.Colors.textPrimary
        case .secondary: return ClaimbDesign.Colors.textSecondary
        case .tertiary: return ClaimbDesign.Colors.textTertiary
        case .accent: return ClaimbDesign.Colors.textAccent
        }
    }
}

// MARK: - View Extensions

extension View {
    public func claimbCard(
        isHighlighted: Bool = false, variant: ClaimbCardStyle.CardVariant = .primary
    ) -> some View {
        self.modifier(ClaimbCardStyle(isHighlighted: isHighlighted, variant: variant))
    }

    public func claimbButton(
        variant: ClaimbButtonStyle.ButtonVariant = .primary,
        size: ClaimbButtonStyle.ButtonSize = .medium
    ) -> some View {
        self.buttonStyle(ClaimbButtonStyle(variant: variant, size: size))
    }

    // MARK: - Text Style Helpers
    public func claimbText(_ style: ClaimbTextStyle.TextStyle = .primary) -> some View {
        self.modifier(ClaimbTextStyle(style))
    }

    public func primaryText() -> some View {
        self.claimbText(.primary)
    }

    public func secondaryText() -> some View {
        self.claimbText(.secondary)
    }

    public func accentText() -> some View {
        self.claimbText(.accent)
    }

    // MARK: - Apple Watch-like Glass Effects
    public func glassBackground() -> some View {
        self.background(ClaimbDesign.Effects.glassMorphism)
    }

    public func glassThinBackground() -> some View {
        self.background(ClaimbDesign.Effects.glassMorphismThin)
    }

    public func glassThickBackground() -> some View {
        self.background(ClaimbDesign.Effects.glassMorphismThick)
    }
}

// MARK: - Color Extensions for Light/Dark Support

extension Color {
    init(lightHex: String, darkHex: String) {
        self = Color(
            NSColor(name: nil) { appearance in
                let isDark = appearance.bestMatch(from: [.darkAqua, .aqua]) == .darkAqua
                return isDark ? NSColor(Color(hex: darkHex)) : NSColor(Color(hex: lightHex))
            })
    }
}

// MARK: - Data Validation Utilities

public enum DataValidator {

    // MARK: - Summoner Name Validation
    public static func isValidSummonerName(_ name: String) -> Bool {
        let trimmed = name.trimmingCharacters(in: .whitespacesAndNewlines)
        return !trimmed.isEmpty && trimmed.count >= 3 && trimmed.count <= 16
            && trimmed.allSatisfy { $0.isLetter || $0.isNumber || $0 == " " }
    }

    public static func isValidTagline(_ tagline: String) -> Bool {
        let trimmed = tagline.trimmingCharacters(in: .whitespacesAndNewlines)
        return !trimmed.isEmpty && trimmed.count >= 3 && trimmed.count <= 5
            && trimmed.allSatisfy { $0.isLetter || $0.isNumber }
    }

    // MARK: - Champion Name Validation
    public static func isValidChampionName(_ name: String) -> Bool {
        let trimmed = name.trimmingCharacters(in: .whitespacesAndNewlines)
        return !trimmed.isEmpty && trimmed.count <= 20
            && trimmed.allSatisfy { $0.isLetter || $0 == " " || $0 == "'" }
    }

    // MARK: - Match Data Validation
    public static func isValidMatchResponse(_ match: MatchResponse) -> Bool {
        // Check essential fields
        guard !match.metadata.matchId.isEmpty,
            let gameEndTimestamp = match.info.gameEndTimestamp,
            gameEndTimestamp > 0,
            !match.info.participants.isEmpty
        else {
            return false
        }

        // Validate participants have essential data
        for participant in match.info.participants {
            guard !participant.puuid.isEmpty,
                !participant.championName.isEmpty
            else {
                return false
            }
        }

        return true
    }

    // MARK: - KPI Validation
    public static func isValidKPI(_ value: Double, type: KPIType) -> Bool {
        switch type {
        case .csPerMin:
            return value >= 0 && value <= 20  // Reasonable CS/min range
        case .killParticipation:
            return value >= 0 && value <= 1  // Percentage
        case .visionScore:
            return value >= 0 && value <= 100  // Reasonable vision score range
        case .damagePerMin:
            return value >= 0 && value <= 50000  // Reasonable damage range
        case .deaths:
            return value >= 0 && value <= 30  // Reasonable death range
        }
    }

    // MARK: - API Response Validation
    public static func sanitizeAPIResponse(_ text: String) -> String {

        let cleaned =
            text
            .trimmingCharacters(in: .whitespacesAndNewlines)
            .replacingOccurrences(of: "\r\n", with: "\n")
            .replacingOccurrences(of: "\r", with: "\n")

        // Limit length to prevent memory issues
        if cleaned.count > 5000 {
            return String(cleaned.prefix(5000)) + "..."
        }

        return cleaned
    }

    // MARK: - Goal Validation
    static func isValidGoal(_ goal: Goal) -> Bool {
        guard !goal.goalDescription.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              goal.targetValue > 0
        else {
            return false
        }
        
        // Validate based on goal type
        switch goal.goalType {
        case .kpi:
            return isValidKPI(goal.targetValue, type: .csPerMin) // Default to CS/min for validation
        case .championDiscipline, .earlyGame, .roleSpecific:
            return goal.targetGames > 0
        }
    }
}

// MARK: - Safe Data Access Extensions

extension Array where Element == MatchResponse {
    /// Safely get matches with validation
    public func validMatches() -> [MatchResponse] {
        return self.filter { DataValidator.isValidMatchResponse($0) }
    }
}



// MARK: - Error Recovery Utilities

public enum ErrorRecovery {

    public static func recoverFromCorruptedData<T>(_ operation: () throws -> T, fallback: T) -> T {
        do {
            return try operation()
        } catch {
            print("⚠️ Data corruption detected, using fallback: \(error)")
            return fallback
        }
    }

    public static func safelyDecodeJSON<T: Codable>(_ data: Data, as type: T.Type) -> T? {
        do {
            return try JSONDecoder().decode(type, from: data)
        } catch {
            print("❌ JSON decoding failed for \(type): \(error)")
            return nil
        }
    }
}

// MARK: - Memory Management

public enum MemoryManager {

    public static func clearCacheIfMemoryPressure() {
        var memoryInfo = mach_task_basic_info()
        var count = mach_msg_type_number_t(MemoryLayout<mach_task_basic_info>.size) / 4

        let kerr: kern_return_t = withUnsafeMutablePointer(to: &memoryInfo) {
            $0.withMemoryRebound(to: integer_t.self, capacity: 1) {
                task_info(
                    mach_task_self_,
                    task_flavor_t(MACH_TASK_BASIC_INFO),
                    $0,
                    &count)
            }
        }

        if kerr == KERN_SUCCESS {
            let memoryUsage = memoryInfo.resident_size
            let memoryLimitMB = 512 * 1024 * 1024  // 512MB threshold

            if memoryUsage > memoryLimitMB {
                print(
                    "⚠️ High memory usage detected (\(memoryUsage / 1024 / 1024)MB), clearing caches"
                )
                AdviceCacheService.shared.cleanupExpiredCache()
                // Cache clearing moved to ChampionDataService
            }
        }
    }
}
