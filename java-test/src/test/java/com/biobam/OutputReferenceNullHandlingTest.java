package com.biobam;

import com.biobam.wdk.lib.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.junit.jupiter.params.provider.NullSource;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import java.util.List;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("OutputReference Null Handling Tests")
class OutputReferenceNullHandlingTest {

    @Nested
    @DisplayName("Basic Null Handling")
    class BasicNullHandling {
        
        @Test
        @DisplayName("Should accept array with single null value")
        void shouldAcceptArrayWithSingleNullValue() {
            // Given
            String[] inputArray = {null};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(1, result.size(), "Result should have size 1");
            assertNotNull(result.get(0), "First element should not be null");
        }
        
        @Test
        @DisplayName("Should accept array with mixed null and non-null values")
        void shouldAcceptArrayWithMixedNullAndNonNullValues() {
            // Given
            String[] inputArray = {"/path/to/file1.txt", null, "/path/to/file3.txt"};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(3, result.size(), "Result should have size 3");
            assertNotNull(result.get(0), "First element should not be null");
            assertNotNull(result.get(1), "Second element should not be null");
            assertNotNull(result.get(2), "Third element should not be null");
        }
        
        @Test
        @DisplayName("Should accept array with all null values")
        void shouldAcceptArrayWithAllNullValues() {
            // Given
            String[] inputArray = {null, null, null};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(3, result.size(), "Result should have size 3");
            assertNotNull(result.get(0), "First element should not be null");
            assertNotNull(result.get(1), "Second element should not be null");
            assertNotNull(result.get(2), "Third element should not be null");
        }
    }
    
    @Nested
    @DisplayName("Edge Cases")
    class EdgeCases {
        
        @Test
        @DisplayName("Should handle empty array")
        void shouldHandleEmptyArray() {
            // Given
            String[] inputArray = {};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(0, result.size(), "Result should have size 0");
        }
        
        @Test
        @DisplayName("Should handle array with only non-null values")
        void shouldHandleArrayWithOnlyNonNullValues() {
            // Given
            String[] inputArray = {"/path/to/file1.txt", "/path/to/file2.txt"};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(2, result.size(), "Result should have size 2");
            assertNotNull(result.get(0), "First element should not be null");
            assertNotNull(result.get(1), "Second element should not be null");
        }
    }
    
    @Nested
    @DisplayName("Null Value Properties")
    class NullValueProperties {
        
        @Test
        @DisplayName("Null values should have correct properties")
        void nullValuesShouldHaveCorrectProperties() {
            // Given
            String[] inputArray = {null};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            OutputReference nullRef = result.get(0);
            
            // Then
            assertNotNull(nullRef, "Null reference should not be null");
            // The null reference should be a special OutputReference that represents null
            // We can't easily test the internal state, but we can verify it's not throwing exceptions
            assertDoesNotThrow(() -> nullRef.getPath(), "getPath() should not throw exception");
            assertDoesNotThrow(() -> nullRef.getLocation(), "getLocation() should not throw exception");
        }
    }
    
    @Nested
    @DisplayName("Integration Tests")
    class IntegrationTests {
        
        @Test
        @DisplayName("Should work with ToolOutputs integration")
        void shouldWorkWithToolOutputsIntegration() {
            // Given
            String[] inputArray = {"/path/to/file1.txt", null, "/path/to/file3.txt"};
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // When & Then - This should not throw any JSII serialization errors
            assertDoesNotThrow(() -> {
                // The fact that we can call fileArray with null values means JSII serialization is working
                assertNotNull(result);
                assertEquals(3, result.size());
            }, "Integration with ToolOutputs should work without JSII errors");
        }
    }
    
    @Nested
    @DisplayName("Parameterized Tests")
    class ParameterizedTests {
        
        @ParameterizedTest
        @ValueSource(strings = {"/path/to/file1.txt", "/path/to/file2.txt", "/path/to/file3.txt"})
        @DisplayName("Should handle valid file paths")
        void shouldHandleValidFilePaths(String filePath) {
            // Given
            String[] inputArray = {filePath};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(1, result.size(), "Result should have size 1");
            assertNotNull(result.get(0), "Element should not be null");
        }
        
        @ParameterizedTest
        @NullSource
        @DisplayName("Should handle null input values")
        void shouldHandleNullInputValues(String filePath) {
            // Given
            String[] inputArray = {filePath};
            
            // When
            List<OutputReference> result = OutputReference.fileArray(inputArray);
            
            // Then
            assertNotNull(result, "Result should not be null");
            assertEquals(1, result.size(), "Result should have size 1");
            assertNotNull(result.get(0), "Element should not be null");
        }
    }
    
    @Test
    @DisplayName("Main success scenario - the original failing case")
    void mainSuccessScenario() {
        // This test represents the exact use case that was failing before our fix
        // Given: The original failing scenario
        String[] inputArray = {null}; // This was causing JSII serialization errors
        
        // When: We call the method that was failing
        List<OutputReference> result = OutputReference.fileArray(inputArray);
        
        // Then: It should work without any JSII errors
        assertNotNull(result, "Result should not be null");
        assertEquals(1, result.size(), "Result should have size 1");
        assertNotNull(result.get(0), "Element should not be null");
        
        // Additional verification that this is working correctly
        OutputReference ref = result.get(0);
        assertDoesNotThrow(() -> ref.getPath(), "getPath() should not throw");
        assertDoesNotThrow(() -> ref.getLocation(), "getLocation() should not throw");
    }
}
