# wdk-lib Java Null Handling Tests

This project contains comprehensive tests for the `wdk-lib` Java bindings, specifically testing the null handling functionality that was implemented to resolve JSII serialization errors.

## 🎯 Purpose

These tests verify that the `OutputReference.fileArray()` method can now accept arrays containing `null` values without throwing JSII serialization errors. This was the core issue that was preventing Java applications from working with certain data structures.

## 🏗️ Project Structure

```
java-test/
├── build.gradle                    # Gradle build configuration
├── gradlew                         # Gradle wrapper script (Unix/macOS)
├── gradlew.bat                     # Gradle wrapper script (Windows)
├── gradle/wrapper/
│   └── gradle-wrapper.properties  # Gradle version configuration
├── src/
│   └── test/java/com/biobam/
│       └── OutputReferenceNullHandlingTest.java  # Comprehensive JUnit 5 tests
└── README.md                       # This file
```

## 🚀 Quick Start

### Prerequisites

- Java 8 or higher
- The `wdk-lib` JAR file must be built and available in `../dist/java/com/biobam/wdk-lib/0.0.0/`

### Running Tests

```bash
# Run all tests
./gradlew test

# Run tests with detailed output
./gradlew test --info

# Run a specific test class
./gradlew test --tests OutputReferenceNullHandlingTest

# Run a specific test method
./gradlew test --tests "OutputReferenceNullHandlingTest.mainSuccessScenario"

# Build the project
./gradlew build

# Clean and rebuild
./gradlew clean build
```

## 🧪 Test Coverage

The test suite covers:

### 1. Basic Null Handling
- ✅ Array with single null value
- ✅ Array with mixed null and non-null values  
- ✅ Array with all null values

### 2. Edge Cases
- ✅ Empty arrays
- ✅ Arrays with only non-null values

### 3. Null Value Properties
- ✅ Null references have correct properties
- ✅ Methods don't throw exceptions

### 4. Integration Tests
- ✅ Works with ToolOutputs integration
- ✅ No JSII serialization errors

### 5. Parameterized Tests
- ✅ Various file path formats
- ✅ Null input values

### 6. Main Success Scenario
- ✅ The exact use case that was failing before

## 🔧 Configuration

### Gradle Configuration

The `build.gradle` file is configured with:

- **JUnit 5**: Latest version with full feature support
- **JSII Runtime**: Required for the wdk-lib bindings
- **Custom JAR**: Points to the locally built wdk-lib JAR
- **Java 8**: Target compatibility

### Dependencies

```gradle
dependencies {
    // JUnit 5
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.9.2'
    testImplementation 'org.junit.jupiter:junit-jupiter-engine:5.9.2'
    testImplementation 'org.junit.jupiter:junit-jupiter-params:5.9.2'
    
    // JSII Runtime
    implementation 'software.amazon.jsii:jsii-runtime:1.112.0'
    
    // Our generated wdk-lib JAR
    implementation files('../dist/java/com/biobam/wdk-lib/0.0.0/wdk-lib-0.0.0.jar')
}
```

## 🐛 What These Tests Verify

### Before (Failing)
```java
// This would throw JSII serialization errors:
String[] inputArray = {null};
OutputReference[] result = OutputReference.fileArray(inputArray);
// ❌ java.lang.RuntimeException: @jsii/kernel.SerializationError
```

### After (Working)
```java
// This now works perfectly:
String[] inputArray = {null};
List<OutputReference> result = OutputReference.fileArray(inputArray);
// ✅ Success! No JSII errors
```

## 🔍 Test Results

When you run the tests, you should see output like:

```
OutputReference Null Handling Tests > Basic Null Handling > Should accept array with single null value PASSED
OutputReference Null Handling Tests > Basic Null Handling > Should accept array with mixed null and non-null values PASSED
OutputReference Null Handling Tests > Basic Null Handling > Should accept array with all null values PASSED
...
BUILD SUCCESSFUL
```

## 🚀 Integration with CI/CD

These tests can be easily integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run Java Tests
  run: |
    cd java-test
    ./gradlew test
```

## 📝 Adding New Tests

To add new test cases:

1. Add new test methods to `OutputReferenceNullHandlingTest.java`
2. Use descriptive test names with `@DisplayName`
3. Follow the Given-When-Then pattern
4. Use appropriate JUnit 5 assertions

Example:
```java
@Test
@DisplayName("Should handle new edge case")
void shouldHandleNewEdgeCase() {
    // Given
    String[] inputArray = {/* test data */};
    
    // When
    List<OutputReference> result = OutputReference.fileArray(inputArray);
    
    // Then
    assertNotNull(result);
    // ... more assertions
}
```

## 🔧 Troubleshooting

### Common Issues

1. **ClassNotFoundException**: Ensure the wdk-lib JAR is built and in the correct location
2. **JSII Runtime Issues**: Check that the JSII runtime version matches the one used to build wdk-lib
3. **Gradle Issues**: Try `./gradlew clean build` to refresh dependencies

### Debug Mode

```bash
# Run with debug output
./gradlew test --debug

# Run with stack traces
./gradlew test --stacktrace
```

## 📚 Additional Resources

- [JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [Gradle User Guide](https://docs.gradle.org/current/userguide/userguide.html)
- [JSII Documentation](https://aws.github.io/jsii/)

## 🎉 Success Criteria

The tests are considered successful when:

1. ✅ All tests pass without JSII serialization errors
2. ✅ `OutputReference.fileArray()` accepts arrays with null values
3. ✅ The method returns valid `List<OutputReference>` objects
4. ✅ Null values are properly handled and don't cause runtime errors
5. ✅ Integration with other wdk-lib components works correctly

This test suite provides confidence that the null handling fix is working correctly and that Java applications can now use the wdk-lib bindings without encountering the previous JSII errors.
